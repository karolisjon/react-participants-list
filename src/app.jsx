import React, { useEffect, useState } from 'react';
import CustomContainer from './components/custom-container';
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
  TextField,
  Select,
  MenuItem,
  ClickAwayListener
} from '@mui/material';

const tableColumns = [
  { id: 1, label: 'Fullname' },
  { id: 2, label: 'Gender' },
  { id: 3, label: 'Email' },
  { id: 4, label: 'Phone nr' },
  { id: 5, label: 'Description' },
  { id: 6, label: 'Actions' },
];

const App = () => {
  const [participants, setParticipants] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch('http://localhost:8000/participants')
      .then(response => response.json())
      .then(participant => setParticipants(participant));
  }, []);

  return (
    <CustomContainer>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
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
              backgroundColor: '#f6f6f6',
              borderRadius: '8px',
              height: 'fit-content',
              width: 400,
              boxShadow: 2,
            }}
          >

            <form
              action="submit"
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '12px',
                paddingLeft: '18px',
                paddingRight: '18px',
                paddingBottom: '30px',
              }}
            >
              <Typography variant='h6' sx={{ my: 2, textAlign: 'center' }}>ADD NEW PARTICIPANT</Typography>

              <FormControl sx={{ my: 1 }}>
                <Typography variant='body2'>Fullname</Typography>
                <TextField variant='standard' />
              </FormControl>

              <FormControl sx={{ my: 1 }}>
                <Typography variant='body2'>Gender</Typography>
                <Select variant='standard'>
                  <MenuItem value="None">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
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

              <Button variant='contained' sx={{
                backgroundColor: '#091fbb'
              }}>
                Add participant
              </Button>
            </form>
          </Modal>
        </Box>
      </ClickAwayListener>

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

    </CustomContainer>
  );
}

export default App;
