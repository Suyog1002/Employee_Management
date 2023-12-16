import Employee from "../employee_Schema.js";

//controller for api req for adding employee
export const addEmployee=async(req,res)=>{
    const employee=req.body;
    const newEmployee = new Employee(employee); 
    try{
        const savedEmployee=await newEmployee.save();//adding employee to database
        
        res.status(201).json(savedEmployee);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}

//controller for api req for employees info
export const getEmployee=async(req,res)=>{
    try{
        const employee=await Employee.find({}); //query to find all employee
        res.status(200).json(employee);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}

//controller for api for particular employee information
export const getDetails=async(req,res)=>{
    try{
        const employee=await Employee.findById({_id:req.params.id }); //query for particular employee
        res.status(200).json(employee);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}

//controller for api for updating particular employee information
export const updateEmployee=async(req,res)=>{
    let employee=req.body;
    const updateEmployee=new Employee(employee); 
    try{
        await Employee.updateOne({_id:req.params.id},updateEmployee);//query for updating
        res.status(200).json(updateEmployee);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}

//controller for api for deleting particular employee information
export const deleteEmployee=async(req,res)=>{
    try{
        await Employee.deleteOne({_id:req.params.id})//query for deleting
        res.status(200).json({message: "User Deleted Successfully"});
    }catch(err){
        res.status(409).json({message: err.message});
    }
}