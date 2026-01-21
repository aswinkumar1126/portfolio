import { getSkills , uploadSkill } from "../../service/skill/skillService.js";

const getAllSkills = async (req, res) => {
    try {
        const skills = await getSkills();
        res.status(200).json(skills);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching skills", error });
    }
};
const uploadSkills = async (req, res) => {
    try {
        const skillsData = req.body;
        const skills = await uploadSkill(skillsData);
        res.status(201).json(skills);
    }
    catch (error) {
        res.status(500).json({ message: "Error uploading skills", error });
    }
};
export { getAllSkills , uploadSkills };