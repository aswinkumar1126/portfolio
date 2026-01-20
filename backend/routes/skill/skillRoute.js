import { getAllSkills , uploadSkills } from "@/backend/controller/skill/skillController";
import express from "express";

const router = express.Router();

router.get("/", getAllSkills);
router.post("/", uploadSkills);


export default router;

