import express from "express";
import {addEmployee,getEmployee,getDetails,updateEmployee,deleteEmployee} from "../controller/employee-controller.js";

const router=express.Router();

//routes for crud operation
router.post('/add',addEmployee); 
router.get('/display',getEmployee);
router.get('/:id',getDetails);
router.post('/:id',updateEmployee);
router.delete('/:id',deleteEmployee);
export default router;