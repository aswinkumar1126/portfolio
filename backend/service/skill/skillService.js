import Skill from '../../model/skill/skillModel.js';

const getSkills = async () => {
  try {
    const skills = await Skill.find({});
    return skills;
    } catch (error) {
        console.error("Error fetching skills:", error);
        throw error;
    }
};

const uploadSkill = async (skillsData) => {
  try {
    const skills = await Skill.insertMany(skillsData);
    return skills;
  }
    catch (error) {
        console.error("Error uploading skills:", error);
        throw error;
    }
};

 const updateSkill = async (skillId, updateData) => {
  const updatedSkill = await Skill.findByIdAndUpdate(
    skillId,
    updateData,
    {
      new: true,
      runValidators: true, // mongoose validation
    }
  );

  if (!updatedSkill) {
    const error = new Error("Skill not found");
    error.statusCode = 404;
    throw error;
  }

  return updatedSkill;
};

export { getSkills , uploadSkill ,updateSkill };

