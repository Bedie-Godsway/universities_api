import express from "express";

import {
    getUniversities,
    getUniversityById,
    createUniversity,
    updateUniversity,
    deleteUniversity
} from "../controllers/universityController.js";

const router = express.Router();

router.get("/", getUniversities);
router.post("/", createUniversity);
router.get("/:id", getUniversityById);
router.put("/:id", updateUniversity);
router.delete("/:id", deleteUniversity);


export default router;