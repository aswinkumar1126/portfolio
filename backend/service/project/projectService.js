import projectModel from "../../model/projects/projectModel.js";

// ✅ Get all projects
const getAllProjects = async () => {
  return await projectModel.find({});
};

// ✅ Get project by ID
const getProjectById = async (id) => {
  const project = await projectModel.findById(id);

  if (!project) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  return project;
};

// ✅ Create project
const createProject = async (projectData) => {
  const project = await projectModel.create(projectData);
  return project;
};

// ✅ Update project (PUT or PATCH)
const updateProject = async (id, updateData) => {
  const updatedProject = await projectModel.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedProject) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  return updatedProject;
};

// ✅ Delete project
const deleteProject = async (id) => {
  const deletedProject = await projectModel.findByIdAndDelete(id);

  if (!deletedProject) {
    const error = new Error("Project not found");
    error.statusCode = 404;
    throw error;
  }

  return deletedProject;
};

export {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
