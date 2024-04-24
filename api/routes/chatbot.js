import express from 'express';
import { chatbot } from '../controllers/chatbot.js';

const router = express.Router();

router.post('/query', chatbot);

export default router;
