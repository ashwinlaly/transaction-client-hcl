import * as transactionType from "./transaction-actionType";

const INITIAL_STATE = {
  transactions: [],
};

export default function transactionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case transactionType.GET_TRANSACTION_DATA:
        return {
          ...state,
          transactions: action.payload.data,
        };
    default:
        return state;
    }
};