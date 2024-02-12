import express from "express";
import { registerUser } from '../controllers/register.js';

const router = express.Router();

router.post("/registerUser", registerUser);

export default router;