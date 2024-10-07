import { Router } from "express";
const router = Router();
import {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
} from "../../controllers/userController";

// /api/users
router
  .route("/")
  .get(getUsers) // GET all users
  .post(createUser); // POST a new user

// /api/users/:userId
router.route("/:userId").get(getSingleUser); // GET a single user by its _id

router.route("/:userId").put(updateUser); // PUT to update a user by its _id

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post().delete();

export { router as userRoutes };
