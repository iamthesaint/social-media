import { Router } from 'express';
import { addThoughtReaction, deleteThoughtReaction } from '../../controllers/thoughtController.js';

const router = Router();

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(addThoughtReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteThoughtReaction);

export default router;