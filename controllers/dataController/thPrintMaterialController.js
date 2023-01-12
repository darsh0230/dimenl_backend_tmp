import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnauthenticatedError } from "../../utils/errors.js";

export const getThPrintMaterial = async (req, res) => {
  // TODO: implement dynamic data fetching from db
  const data = [
    {
      techName: "FDM",
      imgUrl: "",
      available: true,
      material: [
        {
          materialName: "PLA",
          imgUrl: "",
          available: true,
          color: ["red", "blue", "black"],
          quality: ["dynamic", "super", "draft"],
        },
        {
          materialName: "ABS",
          imgUrl: "",
          available: true,
          color: ["red", "blue", "Ultra Black"],
          quality: ["dynamic", "super", "draft"],
        },
        {
          materialName: "TPU",
          imgUrl: "",
          available: true,
          color: ["red", "Royal Blue", "black"],
          quality: ["dynamic", "super", "draft"],
        },
      ],
    },
    {
      techName: "SLA",
      imgUrl: "",
      available: true,
      resin: [
        {
          resinName: "moto",
          color: ["red", "blue", "black"],
        },
        {
          resinName: "cool",
          color: ["cool red", "blue", "black"],
        },
      ],
    },
  ];
  res.status(StatusCodes.OK).json({ result: data });
};
