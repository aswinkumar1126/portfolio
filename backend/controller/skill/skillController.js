import { getSkills , uploadSkill ,updateSkill } from "../../service/skill/skillService.js";
import { createSkillSchema , updateSkillSchema } from "../../validation/skills/skillValidation.js";
import { flattenZodErrors } from "../../utils/formating/resultFormating.js";

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
        // Validate skillsData using zod schema
        const result = createSkillSchema.safeParse(skillsData);
        if (!result.success) {
            console.log(result.error.message);
            return res.status(400).json({ message: "Invalid skill data", errors: flattenZodErrors(result.error.format()), });
        }
        const skills = await uploadSkill(skillsData);
        res.status(201).json(skills);
    }
    catch (error) {
        res.status(500).json({ message: "Error uploading skills", error });
    }
};
const updateSkills = async (req, res) => { 
    // Implementation for updating a skill
    try {
        const skillId = req.params.id;
        const updateData = req.body;
        // Validate updateData using zod schema
        const result = updateSkillSchema.safeParse(updateData);
        if (!result.success) {
            console.log(result.error.message);
            return res.status(400).json({ message: "Invalid update data", errors: flattenZodErrors(result.error.format()), });
        }
        const updatedSkill = await updateSkill(skillId, updateData);
        res.status(200).json(updatedSkill);
    } catch (error) {
        if (error.statusCode === 404) {
            res.status(404).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: "Error updating skill", error });
        }
    }
}
export { getAllSkills , uploadSkills , updateSkills };