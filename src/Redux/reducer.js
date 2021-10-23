// import userReducer from './Transaction/transaction-reducer';
import { combineReducers } from 'redux';
import transactionReducer from './Transaction/transaction-reducer';

const reducer = combineReducers({
    transactions: transactionReducer
});

export default reducer;