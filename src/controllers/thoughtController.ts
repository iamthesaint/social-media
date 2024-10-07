import { User, Thought } from "../models/index.js";
import { Request, Response } from "express";

// get all thoughts GET /thoughts
export const getThoughts = async (_req: Request, res: Response) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get a single thought by id GET /thoughts/:thoughtId
export const getThoughtById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { thoughtId } = req.params;
  try {
    const user = await Thought.findById(thoughtId);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({
        message: "Thought not found",
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// create new thought POST /thoughts
export const createThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(req.body);
    const { thoughtText, username, userId } = req.body;
    const thought = await Thought.create({ thoughtText, username });
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );
    if (!user) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(201).json({ message: "Thought created! ✅ 💭", thought });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// update thought by id PUT /thoughts/:thoughtId
export const updateThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );
    if (!thought) {
      res.status(404).json({ message: "No thought found with this id!" });
    }
    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

// delete thought by id DELETE /thoughts/:thoughtId
export const deleteThought = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const thought = await Thought.findOneAndDelete({
      _id: req.params.thoughtId,
    });
    if (!thought) {
      res.status(404).json({ message: "No thought found with this id!" });
      return;
    }
    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

// create a reaction stored in a single thought's reactions array POST /thoughts/:thoughtId/reactions
export const addThoughtReaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );
    if (!thought) {
      res.status(404).json({ message: "No thought found with this id!" });
    }
    res.json(thought);
    return;
  } catch (err) {
    res.status(500).json(err);
    return;
  }
};

// delete a reaction by reactionId value DELETE /thoughts/:thoughtId/reactions/:reactionId
export const deleteThoughtReaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    );
    if (!thought) {
      res.status(404).json({ message: "No thought found with this id!" });
    }
    res.json(thought);
    return;
  }
  catch (err) {
    res.status(500).json(err);
    return;
  }
};
