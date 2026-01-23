import express from "express";
import upload from "../../middleware/upload.js";
import {
  getAllProjectsController,
  createProjectController,
  updateProjectController,
  deleteProjectController,
} from "../../controller/project/projectController.js";

const projectRouter = express.Router();

projectRouter.get("/", getAllProjectsController);

// ✅ CREATE with images
projectRouter.post(
  "/",
  upload.array("images", 5), // <--- Cloudinary upload
  createProjectController
);

// ✅ UPDATE with images
projectRouter.put(
  "/:id",
  upload.array("images", 5),
  updateProjectController
);

projectRouter.delete("/:id", deleteProjectController);

export default projectRouter;
