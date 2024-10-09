import User from "../models/User.js";
import Thought from "../models/Thought.js";
import { Request, Response } from "express";

// get all users GET /api/users
export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await User.find()
    .populate({ path: "thoughts", select: "thoughtText -__v" })
    .populate({ path: "friends", select: "username -__v" });
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single user by id, including thought and friend data GET /api/users/:userId
export const getSingleUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId })
      .populate({ path: "thoughts", select: "thoughtText -__v" })
      .populate({ path: "friends", select: "username -__v" })
      .select("-__v");
    if (!user) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    const friendsWithNames = user.friends.map((friend: any) => ({
      id: friend._id.toString(),
      name: friend.username,
    }));

    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      friends: friendsWithNames,
      thoughts: user.thoughts,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

// create a new user POST /api/users
export const createUser = async (req: Request, res: Response) => {
  try {
    const dbUserData = await User.create(req.body);
    res.json(dbUserData);
  } catch (err) {
    res.status(500).json(err);
  }
};

// update a user by id PUT /api/users/:userId
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const updated = await User.findOneAndUpdate({ _id: userId }, req.body, {
      new: true,
    });
    if (!updated) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json(err);
  }
};

// delete a user by id DELETE /api/users/:userId, including associated thoughts
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const deleted = await User.findOneAndDelete({ _id: userId });
    if (!deleted) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    // delete users associated thoughts
    const deletedThoughts = await Thought.deleteMany({
      _id: { $in: deleted.thoughts },
    });
    if (!deletedThoughts) {
      res.status(404).json({ message: "No thought found with this id!" });
      return;
    }
    res.json(deleted);
  } catch (err) {
    res.status(400).json(err);
  }
};

// add a new friend to a user's friend list POST /api/users/:userId/friends/:friendId
export const addFriend = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
    if (userId === friendId) {
      res
        .status(400)
        .json({ message: "Unfortunately, you cannot be your own friend!" });
      return;
    }
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { friends: friendId } },
      { new: true }
    )
      .populate({ path: "friends", select: "username -__v" })
      .select("-__v");
    if (!updatedUser) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    const friends = updatedUser.friends.map((friend: any) => ({
      id: friend._id,
      username: friend.username,
    }));
    res.json({ ...updatedUser.toObject(), friends });
  } catch (err) {
    res.status(500).json(err);
  }
};

// remove a friend from a user's friend list DELETE /api/users/:userId/friends/:friendId
export const removeFriend = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const friendId = req.params.friendId;
    const updated = await User.findOneAndUpdate(
      { _id: userId },
      { $pull: { friends: friendId } },
      { new: true }
    );
    if (!updated) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.json(updated);
  } catch (err) {
    res.status(500).json(err);
  }
};
