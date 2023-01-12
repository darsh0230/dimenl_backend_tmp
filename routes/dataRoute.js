import express from "express";
import { getThPrintMaterial } from "../controllers/dataController/thPrintMaterialController.js";

const router = express.Router();

router.get("/thPrint/material", getThPrintMaterial);

export default router;
