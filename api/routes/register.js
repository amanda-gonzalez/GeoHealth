import express from "express";
import { registerUser, registerAdmin } from '../controllers/register.js';

const router = express.Router();

router.post("/registerUser", registerUser);

router.post("/registerAdmin", registerAdmin);

export default router;