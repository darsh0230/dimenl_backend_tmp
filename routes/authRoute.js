import express from "express";
import { anonRegister } from "../controllers/authController.js";

const router = express.Router();

router.post("/createAnon", anonRegister);

export default router;
