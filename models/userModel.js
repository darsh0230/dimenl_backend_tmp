import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String },
  isAnon: { type: Boolean },
});

export default mongoose.model("Users", userSchema);
