import mongoose from "mongoose";

//employee schema
const employeeSchema =new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true
    }
});

const Employee=mongoose.model('Employee',employeeSchema);
export default Employee;