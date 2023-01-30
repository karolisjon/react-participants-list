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
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('None');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editableParticipant, setEditableParticipant] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFullname('');
    setGender('None');
    setEmail('');
    setPhone('');
    setDescription('');

    setOpen(false);
  };

  const fetchAllParticipants = () => {
    fetch('http://localhost:8000/participants')
      .then(response => response.json())
      .then(participant => setParticipants(participant));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParticipant = { fullname, gender, email, phone, description };

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newParticipant)
    };

    setIsLoading(true);

    fetch('http://localhost:8000/participants', requestOptions)
      .then(() => {
        setFullname('');
        setGender('None');
        setEmail('');
        setPhone('');
        setDescription('');

        setIsLoading(false);
        setOpen(!open);
      })

    fetchAllParticipants();
  };

  const onEdit = async (id) => {
    setOpen(true);
    setEditableParticipant(true);

    await fetch(`http://localhost:8000/participants/${id}`)
      .then(res => res.json())
      .then(({ fullname, gender, email, phone, description }) => {
        setFullname(fullname);
        setGender(gender);
        setEmail(email);
        setPhone(phone);
        setDescription(description);
      });
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/participants/${id}`, { method: 'DELETE' });
    fetchAllParticipants();
  }

  useEffect(() => {
    fetchAllParticipants();
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
          slotProps={{ backdrop: { sx: { background: 'transparent' } } }}
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            border: '1px solid #b9c2ff',
            borderRadius: '8px',
            height: 'fit-content',
            width: 400,
            boxShadow: 2,
          }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: '12px',
                paddingLeft: '18px',
                paddingRight: '18px',
                paddingBottom: '30px',
              }}
            >
              {!editableParticipant
                ? <Typography variant='h6' sx={{ my: 2, textAlign: 'center' }}>ADD NEW PARTICIPANT</Typography>
                : <Typography variant='h6' sx={{ my: 2, textAlign: 'center' }}>EDIT PARTICIPANT</Typography>
              }

              <FormControl sx={{ my: 1 }}>
                <Typography variant='body2'>Fullname</Typography>
                <TextField
                  variant='standard'
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </FormControl>

              <FormControl sx={{ my: 1 }}>
                <Typography variant='body2'>Gender</Typography>
                <Select
                  variant='standard'
                  value={gender}
                  MenuProps={{
                    onClick: e => {
                      e.preventDefault();
                    }
                  }}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="None"><em>None</em></MenuItem>
                  <MenuItem value='Male'>Male</MenuItem>
                  <MenuItem value='Female'>Female</MenuItem>
                  <MenuItem value='Other'>Other</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ my: 1 }}>
                <Typography variant='body2'>Email</Typography>
                <TextField
                  variant='standard'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl sx={{ my: 1 }}>
                <Typography variant='body2'>Phone nr</Typography>
                <TextField
                  variant='standard'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormControl>

              <FormControl sx={{ my: 1 }}>
                <Typography variant='body2'>Description</Typography>
                <TextField
                  variant='standard'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={3}
                />
              </FormControl>

              {!editableParticipant
                ? <Button
                  variant='contained'
                  type='submit'
                  sx={{
                    backgroundColor: '#091fbb'
                  }}>
                  Add participant
                </Button>

                : <Button
                  variant='contained'
                  type='submit'
                  color='warning'
                >
                  Edit participant
                </Button>
              }
            </form>
          </Box>
        </Modal>
      </Box>

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
              <TableRow key={id} id={id}>
                <TableCell>{fullname}</TableCell>
                <TableCell align="left">{gender}</TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{phone}</TableCell>
                <TableCell align="left" sx={{ width: '30%' }}>{description}</TableCell>
                <TableCell align="left">
                  <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Button variant='contained' color='warning' onClick={() => onEdit(id)}>Edit</Button>
                    <Button variant='contained' color='error' onClick={() => handleDelete(id)}>Delete</Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </Container >
  );
}

export default App;
