import { Router } from 'express';
import { createArea, deleteArea, getArea, getAreas } from '../controllers/area.controller.js';

const router = Router();

router.get("/", getAreas);
router.get("/:id", getArea);
router.post("/", createArea);
router.delete("/:id", deleteArea)

export default router;