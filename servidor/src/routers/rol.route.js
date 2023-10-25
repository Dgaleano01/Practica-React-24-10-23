import { Router } from 'express';
import { createRol, deleteRol, getRol, getRols } from '../controllers/rol.controller.js';

const router = Router();

router.get("/", getRols);
router.get("/:id", getRol);
router.post("/", createRol);
router.delete("/:id", deleteRol)

export default router;