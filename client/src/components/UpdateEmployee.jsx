import React, { useState,useEffect } from 'react';
import {FormControl,FormGroup,InputLabel,Input, Typography, styled, Button} from '@mui/material';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const Container=styled(FormGroup)`
  margin: 5% auto 0 auto;
  width: 50%;
  & > div{
    margin-top: 20px
  }
`
const defaultValue={
  name: '',
  age: '',
  department: '',
  position: '',
  salary: ''
}

const UpdateEmployee = () => {
  const [employee,setEmployee]=useState(defaultValue);
  const navigate=useNavigate();
  const {id}=useParams();
  useEffect(() => {
    const loadDetails = async () => {
      try {
        const response = await axios.get(`https://employee-management-api-beta.vercel.app/${id}`);
        setEmployee(response.data);
        console.log(response.data);
      } catch (err) {
        console.log("Error while Updating", err);
      }
    };
    loadDetails();
  }, [id]);

  const onValueChange=(e)=>{
    setEmployee({...employee,[e.target.name]: e.target.value});
  }
  //function for updating particular employee details
  const updateEmployee=async(employee,id)=>{
    try{
      await axios.post(`https://employee-management-api-beta.vercel.app/${id}`,employee);
      navigate('/display');
      toast.success('Employee Updated successfully');
    }catch(err){
      console.log("Error while Add Employee",err);
      toast.error('Error in updating Employee.');
    }
    
  }

  return (
    <Container>
      <Typography variant='h4'>Update Employee</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' value={employee.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='age' value={employee.age}/>
      </FormControl>
      <FormControl>
        <InputLabel>Department</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='department' value={employee.department}/>
      </FormControl>
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='position' value={employee.position}/>
      </FormControl>
      <FormControl>
        <InputLabel>Salary</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='salary' value={employee.salary}/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>updateEmployee(employee,id)}>Update Employee</Button>
      </FormControl>
    </Container>
    
  )
}

export default UpdateEmployee
