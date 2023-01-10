import React from 'react';
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
          <TableRow>
            <TableCell>baby jesus</TableCell>
            <TableCell align="left">male</TableCell>
            <TableCell align="left">baby@jesus.com</TableCell>
            <TableCell align="left">+370 63642 678</TableCell>
            <TableCell align="left" sx={{ width: '30%' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.</TableCell>
            <TableCell align="left">
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button variant='contained' color='warning'>Edit</Button>
                <Button variant='contained' color='error'>Delete</Button>
              </Box>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>james bond</TableCell>
            <TableCell align="left">male</TableCell>
            <TableCell align="left">james@bond.com</TableCell>
            <TableCell align="left">+370 65542 678</TableCell>
            <TableCell align="left" sx={{ width: '30%' }}>labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.`</TableCell>
            <TableCell align="left">
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button variant='contained' color='warning'>Edit</Button>
                <Button variant='contained' color='error'>Delete</Button>
              </Box>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>james bond</TableCell>
            <TableCell align="left">male</TableCell>
            <TableCell align="left">james@bond.com</TableCell>
            <TableCell align="left">+370 65542 678</TableCell>
            <TableCell align="left" sx={{ width: '30%' }}>entore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.`</TableCell>
            <TableCell align="left">
              <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <Button variant='contained' color='warning'>Edit</Button>
                <Button variant='contained' color='error'>Delete</Button>
              </Box>
            </TableCell>
          </TableRow>

        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default ParticipantsTable;
