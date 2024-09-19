import express from 'express';
import { createEmployee, uploadImage, getImage, getAllEmployees, getEmployee, updateEmp, deleteEmployeeById } from './controller.js';
import upload from './middleware.js';

const router = express.Router();

router.post('/create', createEmployee);
router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);
router.get('/list', getAllEmployees);
router.get('/update/:id', getEmployee);
router.put('/update/employee/:id', updateEmp);
router.delete('/delete/:id', deleteEmployeeById);

export default router;