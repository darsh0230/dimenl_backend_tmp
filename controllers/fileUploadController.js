import { StatusCodes } from "http-status-codes";
import crypto from "crypto";
import { BadRequestError, UnauthenticatedError } from "../utils/errors.js";
import fileModel from "../models/fileModel.js";

export const ModelUpload = async (req, res) => {
  console.log("file Uploaded");
  console.log(req.file);

  const { uid } = req.body;
  if (!uid) throw new BadRequestError("Please provide uid");

  // TODO: check for duplicate group id
  const groupId = crypto.randomBytes(12).toString("hex");

  const fileDetails = req.file;
  const fileType = fileDetails.originalname.split(".").at(-1).toLowerCase();
  const fileRes = await fileModel.create({
    uid,
    originalName: fileDetails.originalname,
    fileName: fileDetails.filename,
    size: fileDetails.size,
    fileType,
    groupId,
    mainFile: true,
  });
  res.status(StatusCodes.OK).json({
    result: fileRes,
  });
};

export const additionalFileUpload = async (req, res) => {
  const { groupId, uid } = req.body;

  if (!groupId || !uid)
    throw new BadRequestError("Please provide groupId and uid");

  if (!(await fileModel.findOne({ groupId })))
    throw new BadRequestError("groupId dosen't exist");

  var fileRes = [];
  for (const file of req.files) {
    const result = await fileModel.create({
      uid,
      originalName: file.originalname,
      fileName: file.filename,
      size: file.size,
      fileType: file.originalname.split(".").at(-1).toLowerCase(),
      groupId,
      mainFile: false,
    });
    fileRes.push(result);
  }

  res.status(StatusCodes.OK).json({ result: fileRes });
};
