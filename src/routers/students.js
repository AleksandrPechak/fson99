import { Router } from 'express';
import {
  getStudentByIdController,
  getStudentsController,
  createStudentController
} from '../controllers/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateMongoId } from '../middlewares/index.js';

const router = Router();

router.use('./students/:studentId', validateMongoId('studentId'));

router.get('/students', ctrlWrapper(getStudentsController));

router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

router.post('/students/', ctrlWrapper(createStudentController));


// router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

// router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));

export default router;
