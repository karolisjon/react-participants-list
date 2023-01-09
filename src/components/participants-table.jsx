import React from 'react';
import {
  Box,
  Button,
  Table,
  TableBody as TableHead,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';

const ParticipantsTable = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ fontWeight: 600 }}>Fullname</TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>Gender</TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>Email</TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>Phone nr</TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>Description</TableCell>
            <TableCell align="left" sx={{ fontWeight: 600 }}>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableHead>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>baby jesus</TableCell>
            <TableCell align="left">male</TableCell>
            <TableCell align="left">baby@jesus.com</TableCell>
            <TableCell align="left">+370 63642 678</TableCell>
            <TableCell align="left" sx={{ width: '30%' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.</TableCell>
            <TableCell align="left">
              <Box sx={{ display: 'flex' }}>
                <Button>Edit</Button>
                <Button>Delete</Button>
              </Box>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>james bond</TableCell>
            <TableCell align="left">male</TableCell>
            <TableCell align="left">james@bond.com</TableCell>
            <TableCell align="left">+370 65542 678</TableCell>
            <TableCell align="left" sx={{ width: '30%' }}>labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, labore, sapiente veniam quod libero quasi earum iste nulla, inventore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.`</TableCell>
            <TableCell align="left">
              <Button>Edit</Button>
              <Button>Delete</Button>
            </TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell>james bond</TableCell>
            <TableCell align="left">male</TableCell>
            <TableCell align="left">james@bond.com</TableCell>
            <TableCell align="left">+370 65542 678</TableCell>
            <TableCell align="left" sx={{ width: '30%' }}>entore harum aliquid ullam nostrum! Consequuntur facere iste qui quae ab aut.`</TableCell>
            <TableCell align="left">
              <Button>Edit</Button>
              <Button>Delete</Button>
            </TableCell>
          </TableRow>

        </TableHead>

      </Table>
    </TableContainer>
  )
}

export default ParticipantsTable;
