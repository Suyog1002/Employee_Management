import React, { useState } from 'react';
import {FormControl,FormGroup,InputLabel,Input, Typography, styled, Button} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Container=styled(FormGroup)`
  margin: 5% auto 0 auto;
  width: 50%;
  & > div{
    margin-top: 20px
  }
`


const AddUser = () => {
  const [employee,setEmployee]=useState({});
  const navigate=useNavigate();

  const onValueChange=(e)=>{
    setEmployee({...employee,[e.target.name]: e.target.value});
  }

  //function for adding employee
  const addEmployee=async(employee)=>{
    try{
      await axios.post('https://employee-management-api-beta.vercel.app/add',employee); //promise for add api
      toast.success('Employee added successfully');
      navigate('/display');
    }catch(err){
      console.log("Error while Add Employee",err);
      toast.error('Error in adding Employee.');
    }
  }
  return (
    <Container>
      <Typography variant='h4'>Add Employee</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name'/>
      </FormControl>
      <FormControl>
        <InputLabel>Age</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='age'/>
      </FormControl>
      <FormControl>
        <InputLabel>Department</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='department'/>
      </FormControl>
      <FormControl>
        <InputLabel>Position</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='position'/>
      </FormControl>
      <FormControl>
        <InputLabel>Salary</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='salary'/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=>addEmployee(employee)}>Add Employee</Button>
      </FormControl>
    </Container>
  )
}

export default AddUser
