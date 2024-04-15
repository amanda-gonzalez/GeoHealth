import express from "express";
import {getUserData} from "../controllers/auth.js";

const app = express();

const router = express.Router();

router.post("/getUserData", getUserData);

export default router;

