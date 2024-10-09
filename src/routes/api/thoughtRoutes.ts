import { Router } from "express";
const router = Router();
import {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  deleteThoughtReaction,
  getThoughtReactions
} from "../../controllers/thoughtController.js";

// /api/thoughts
router
  .route("/")
  .get(getThoughts) // GET all thoughts
  .post(createThought); // POST a new thought

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getThoughtById) // GET a single thought by its _id
  .put(updateThought) // PUT to update a thought by its _id
  .delete(deleteThought); // DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions
router
  .route("/:thoughtId/reactions")
  .get(getThoughtReactions) // GET all reactions stored in a single thought's reactions array
  .post(addThoughtReaction) // POST to create a reaction stored in a single thought's reactions array

// /api/thoughts/:thoughtId/reactions/:reactionId
router
  .route("/:thoughtId/reactions/:reactionId")
  .delete(deleteThoughtReaction); // DELETE to pull and remove a reaction by the reaction's reactionId value

export { router as thoughtRoutes };
