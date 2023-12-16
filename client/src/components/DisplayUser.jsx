import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import toast from 'react-hot-toast';

const StyledTable = styled(Table)`
  width: 80%;
  margin: 50px auto 0 auto
`;
const THead = styled(TableRow)`
  background: black;
  & > th{
    color: white
  }
`
const DisplayUser = () => {
  const [employee, setEmployee] = useState([]);
  //function for requesting employees details
  const getEmployee = async () => {
    try {
      let response = await axios.get('http://localhost:8000/display');
      setEmployee(response.data);
    } catch (err) {
      console.log("Error on employee display", err);
    }
  }

  //function for deleting particular employee details
  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/${id}`);
      console.log("Employee deleted successfully");
      getEmployee();
      toast.success('Employee deleted successfully');
    } catch (err) {
      console.log("Error on Deleting Employee", err);
      toast.error('Error in deleting Employee.');
    }
  }
  useEffect(() => {
    getEmployee();
  }, []);
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Name</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Department</TableCell>
          <TableCell>Position</TableCell>
          <TableCell>Salary</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          employee.map(employee => (
            <TableRow key={employee._id}>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.age}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.position}</TableCell>
              <TableCell>{employee.salary}</TableCell>
              <TableCell>
                <Link to={`/update/${employee._id}`}>
                  <Button variant='contained' style={{ marginRight: 10 }} startIcon={<EditIcon />}>Edit</Button>
                </Link>

                <Button variant="outlined" onClick={() => deleteEmployee(employee._id)} startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </StyledTable>
  )
}

export default DisplayUser
