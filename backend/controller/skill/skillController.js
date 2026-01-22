import { getSkills , uploadSkill } from "../../service/skill/skillService.js";
import { createSkillSchema } from "../../validation/skills/skillValidation.js";
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
export { getAllSkills , uploadSkills };