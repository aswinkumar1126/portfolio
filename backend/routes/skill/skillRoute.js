import { getAllSkills , uploadSkills ,updateSkills } from "../../controller/skill/skillController.js";
import express from "express";

const router = express.Router();

router.get("/", getAllSkills);
router.post("/", uploadSkills);
router.put("/:id", updateSkills);


export default router;

