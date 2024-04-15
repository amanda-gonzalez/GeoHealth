import express from "express";
import { loginAdmin } from "../controllers/login.js";
import { loginUser } from "../controllers/login.js";

const app = express();

const router = express.Router();

router.post("/loginAdmin", loginAdmin);
router.post("/loginUser", loginUser);

export default router;