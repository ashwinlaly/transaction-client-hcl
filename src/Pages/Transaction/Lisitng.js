import React, {useEffect, useState, lazy} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import UserService from '../../Service/user';

const Modal = lazy(() => import('../../Components/Modal/Modal'));
const Listing = () => {
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [transaction, setTransaction] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    UserService.getTransactions().then(data => {
      setTransactions(data.data);
    });
  }, []);

  const handleTransactionModa = (_id) => {
    UserService.getAllTransacionByID(_id).then(data => {
      setTransaction(data.data);
      handleOpen();
    });
  }

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.from_id.name}</TableCell>
              <TableCell>{row.to_id.name}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell align="right">
                <Button onClick={() => handleTransactionModa(row._id)} variant="contained">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {transaction && <Modal transaction={transaction} open={open} handleOpen={handleOpen} handleClose={handleClose}/>}
    </React.Fragment>
  );
}

export default Listing;