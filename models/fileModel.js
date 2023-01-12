import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    uid: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    originalName: { type: String },
    fileName: { type: String },
    size: { type: Number },
    fileType: { type: String },
    groupId: { type: String },
    mainFile: { type: Boolean },
  },
  { timestamps: true }
);

export default mongoose.model("UploadFiles", fileSchema);
