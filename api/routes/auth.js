import express from "express";
import { loginAdmin } from "../controllers/auth.js";
import { login } from "../controllers/auth.js";

const app = express()

const router = express.Router();

router.post("/loginAdmin", loginAdmin);
router.post("/login", login);

export default router;