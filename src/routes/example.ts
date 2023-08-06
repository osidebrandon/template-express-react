import express from "express";
import controller from '../controllers/example';

const router = express.Router();

// POST /api/example
router.get('/', controller.example);

export default router;