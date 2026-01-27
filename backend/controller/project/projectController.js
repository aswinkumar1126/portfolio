import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../../service/project/projectService.js";

import {
  createProjectsSchema,
  updateProjectsSchema,
} from "../../validation/projects/projectValidation.js";

// ✅ Get all
export const getAllProjectsController = async (req, res) => {
  try {
    const projects = await getAllProjects();
    res.status(200).json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ Get by ID
export const getProjectByIdController = async (req, res) => {
  try {
    const project = await getProjectById(req.params.id);
    res.status(200).json({ success: true, data: project });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};

// ✅ Create
export const createProjectController = async (req, res) => {
  try {
    // 1️⃣ Map Cloudinary response
    console.log("Uploaded files:", req.files);
    const images = req.files?.map((file, index) => ({
      url: file.path,          // Cloudinary URL
      altText: req.body.name || "project image",
      isCover: index === 0,
    }));

    // 2️⃣ Merge body + images
    const validatedData = createProjectsSchema.parse({
      ...req.body,
      images,
    });
    console.log("Validated Data:", validatedData);
  

    // 3️⃣ Save
    const project = await createProject(validatedData);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ Update (PUT / PATCH)
export const updateProjectController = async (req, res) => {
  try {
    let updateData = { ...req.body };

    // 1️⃣ If new images uploaded
    if (req.files && req.files.length > 0) {
      updateData.images = req.files.map((file, index) => ({
        url: file.path,
        alt: req.body.name || "project image",
        isCover: index === 0,
      }));
    }

    // 2️⃣ Validate
    const validatedData = updateProjectsSchema.parse(updateData);

    // 3️⃣ Update DB
    const project = await updateProject(req.params.id, validatedData);

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    res.status(error.statusCode || 400).json({
      success: false,
      message: error.message,
    });
  }
};


// ✅ Delete
export const deleteProjectController = async (req, res) => {
  try {
    await deleteProject(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
  }
};
