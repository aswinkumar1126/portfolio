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


export { getSkills , uploadSkill };

