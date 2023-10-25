import { Router } from 'express';
import { createEmployee, deleteEmployee, getEmployees, getEmployee, updateEmployee} from '../controllers/employee.controller.js';

const router = Router();

router.get("/", getEmployees);
router.get("/:id", getEmployee);
router.post("/", createEmployee);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;