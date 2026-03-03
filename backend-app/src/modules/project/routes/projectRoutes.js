import express from 'express';
import {
  createProject,
  listProjects,
  getProject,
} from '../controllers/projectController.js';
import protect from '../../../middleware/auth.js';

const router = express.Router();

router.use(protect); // all routes require auth

router.post('/', createProject);
router.get('/', listProjects);
router.get('/:id', getProject);

export default router;
