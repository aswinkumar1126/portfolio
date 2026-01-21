import { getAllSkills , uploadSkills } from "../../controller/skill/skillController.js";
import express from "express";

const router = express.Router();

router.get("/", getAllSkills);
router.post("/", uploadSkills);


export default router;

