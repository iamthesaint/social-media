import { Router } from 'express';
const router = Router();
import { getUsers, getSingleUser, createUser } from '../../controllers/userController';

// /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

// /api/users/:userId
router.route('/:userId')
  .get(getSingleUser);

export default router;