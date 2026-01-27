import express from "express";
import upload from "../../middleware/upload.js";
import {
  getAllProjectsController,
  createProjectController,
  updateProjectController,
  deleteProjectController,
} from "../../controller/project/projectController.js";
import cloudinary from "../../config/cloudinary.js";

const projectRouter = express.Router();

projectRouter.post("/test" , (req,res) =>{
  cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/w_300/lady.jpg")
  .then((result) => {
    res.json({success:true, data: result});
  })
  .catch((error) => {
    res.status(500).json({success:false, message: error.message});
  });

});

projectRouter.get("/", getAllProjectsController);

// ✅ CREATE with images
projectRouter.post(
  "/",
  upload.array("images" ,5), // <--- Cloudinary upload
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
