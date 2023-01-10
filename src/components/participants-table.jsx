import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableBody as TableHead,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';

const tableColumns = [
  { id: 1, label: 'Fullname' },
  { id: 2, label: 'Gender' },
  { id: 3, label: 'Email' },
  { id: 4, label: 'Phone nr' },
  { id: 5, label: 'Description' },
  { id: 6, label: 'Actions' },
];

const ParticipantsTable = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/participants')
      .then(response => response.json())
      .then(participant => setParticipants(participant));
  }, []);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {tableColumns.map((tableColumn) => (
              <TableCell align="left" sx={{ fontWeight: 600 }} key={tableColumn.id}>{tableColumn.label}</TableCell>
            ))
            }
          </TableRow>
        </TableHead>

        <TableBody>
          {
            participants.map(({
              id, 
              fullname, 
              gender, 
              email, 
              phone, 
              description
            }) => (
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
            ))
          }


        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default ParticipantsTable;
