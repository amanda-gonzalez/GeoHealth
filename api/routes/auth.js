import express from "express";
import {getUser} from "../controllers/auth.js";

const app = express();

const router = express.Router();

router.get("/getUser", getUser);
export default router;