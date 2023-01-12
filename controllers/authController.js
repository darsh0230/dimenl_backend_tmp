import { StatusCodes } from "http-status-codes";
import UserModel from "../models/userModel.js";
import { BadRequestError, UnauthenticatedError } from "../utils/errors.js";

export const anonRegister = async (req, res) => {
  const user = await UserModel.create({ isAnon: true });
  res.status(StatusCodes.CREATED).json({ user });
};
