import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({transaction, open, handleOpen, handleClose}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {transaction.length &&
              <React.Fragment>
                From  : {transaction[0].from_id.name} <br/>
                To : {transaction[0].to_id.name} <br/>
                Account No : {transaction[0].from_id.banking.account_number} <br/>
                IIFC : {transaction[0].ifsc_code} <br/>
                Amount : {transaction[0].amount} <br/>
                Comments : {transaction[0].comments} <br/>
                Balance : {transaction[0].amount_after_credit} <br/>
              </React.Fragment>
            }
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
