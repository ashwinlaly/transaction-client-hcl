import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {connect} from 'react-redux';
import Listing from './Lisitng';
import { getAllTransactionData } from '../../Redux/Transaction/transaction-action';

const Transaction = ({transactions, getAllTransactions}) => {

  useEffect(() => {
    getAllTransactions();
  }, []);

  console.log("transactions", transactions);
  return (
    <Grid item xs={15} padding={30}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Listing />
        </Paper>
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTransactions: (data) =>  dispatch(getAllTransactionData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);