import React, { useEffect, useState } from 'react';
import Container from './components/custom-container';
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
  ClickAwayListener,
  AppBar,
  Toolbar,
} from '@mui/material';

const tableColumns = [
  { id: 1, label: 'FULLNAME' },
  { id: 2, label: 'GENDER' },
  { id: 3, label: 'EMAIL' },
  { id: 4, label: 'PHONE NR' },
  { id: 5, label: 'DESCRIPTION' },
  { id: 6, label: 'ACTIONS' },
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
    <Container>
      <AppBar sx={{ backgroundColor: '#091fbb' }}>
        <Toolbar>
          <Container>
            <Typography variant='h5'>PARTICIPANTS LIST</Typography>
          </Container>
        </Toolbar>
      </AppBar>

        <ClickAwayListener onClickAway={handleClickAway}>
          <Box sx={{ marginTop: '80px' }}>
            <Button
              sx={{
                borderRadius: '8px',
                backgroundColor: '#fff',
                color: '#091fbb',
                border: '1px solid #091fbb'
              }}
              onClick={handleOpen}
            >
              Add new
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
                backgroundColor: '#fff',
                border: '1px solid #091fbb',
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
    </Container>
  );
}

export default App;
