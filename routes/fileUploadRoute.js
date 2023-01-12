import express from "express";
import multer from "multer";
import crypto from "crypto";
import {
  ModelUpload,
  additionalFileUpload,
} from "../controllers/fileUploadController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "uploads");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      // TODO: add max file size limit
      //TODO: check if the value already exists n change
      `${crypto.randomBytes(16).toString("hex")}`
    );
  },
});

let upload = multer({ storage: storage });

router.post("/modelFile", upload.single("file"), ModelUpload);
router.post(
  "/additionalFile",
  upload.array("additionalFiles", 10),
  additionalFileUpload
);

export default router;
