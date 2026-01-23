import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  url: { type: String, required: true },
  altText: { type: String },
  isCover: { type: Boolean, default: false },
});

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    link: String,
    technologies: [String],
    images: [imageSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
