import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Modal,
  Typography,
  FormControl,
  InputLabel,
  Input,
  TextField,
  Select,
  MenuItem
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch('http://localhost:3004/participants')
      .then(response => response.json())
      .then(participant => setParticipants(participant));
  }, []);

  return (
    <>
      <Button
        sx={{
          borderRadius: '8px',
          backgroundColor: 'green',
          color: '#fff'
        }}
        onClick={handleOpen}
      >
        + Add
      </Button>

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#f4f4f4',
          height: 'fit-content',
          width: 400,
          boxShadow: 2,
          pt: 2,
          px: 4,
          pb: 3,
        }}
      >
        <form
          action="submit"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography variant='h6' sx={{ my: 2 }}>Add new participant</Typography>

          <FormControl sx={{ my: 1 }}>
            <Typography variant='body2'>Fullname</Typography>
            <TextField variant='standard' />
          </FormControl>

          <FormControl sx={{ my: 1 }}>
            <Typography variant='body2'>Gender</Typography>
            <Select variant='standard'>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
              <MenuItem value='other'>Other</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ my: 1 }}>
            <Typography variant='body2'>Email</Typography>
            <TextField variant='standard' />
          </FormControl>

          <FormControl sx={{ my: 1 }}>
            <Typography variant='body2'>Phone nr</Typography>
            <TextField variant='standard' />
          </FormControl>

          <FormControl sx={{ my: 1 }}>
            <Typography variant='body2'>Description</Typography>
            <TextField
              variant='standard'
              multiline
              rows={3}
            />
          </FormControl>

          <Button variant='contained'>Add participant</Button>
        </form>

      </Modal>

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
    </>
  )
}

export default ParticipantsTable;
