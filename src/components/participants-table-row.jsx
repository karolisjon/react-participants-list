import React from 'react';
import {
  Box,
  Button,
  TableCell,
  TableRow,
} from '@mui/material';

const ParticipantsTableRow = ({ id, fullname, gender, email, phone, description }) => {
  return (
    <TableRow key={id}>
      <TableCell>{fullname}</TableCell>
      <TableCell align="left">{gender}</TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">{phone}</TableCell>
      <TableCell align="left" sx={{ width: '30%' }}>{description}</TableCell>
      <TableCell align="left">
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Button variant='contained' color='warning'>Edit</Button>
          <Button variant='contained' color='error'>Delete</Button>
        </Box>
      </TableCell>
    </TableRow>
  )
}

export default ParticipantsTableRow;
