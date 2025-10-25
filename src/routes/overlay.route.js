import express from "express";
import { addScore,getScore } from '../controllers/overlay.controller.js';

const router = express.Router();

router.post("/add-score",addScore);

router.get("/get-score",getScore);

export default router;