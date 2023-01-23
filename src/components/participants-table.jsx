import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import ParticipantsTableRow from './participants-table-row';

const tableColumns = [
  { id: 1, label: 'FULLNAME' },
  { id: 2, label: 'GENDER' },
  { id: 3, label: 'EMAIL' },
  { id: 4, label: 'PHONE NR' },
  { id: 5, label: 'DESCRIPTION' },
  { id: 6, label: 'ACTIONS' },
];

const ParticipantsTable = (participants) => {
  return (
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
          participants.map(participant => (
            <ParticipantsTableRow 
            id={participant.id}
            fullname={participant.fullname}
            />
          ))
        }
    </TableBody>
  </Table>
  )
}

export default ParticipantsTable;
