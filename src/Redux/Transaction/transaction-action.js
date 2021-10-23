import axios from "axios";
import * as transactionType from "./transaction-actionType";

export const getAllTransactionData = (values) => {
    return (dispatch) => {
        function onSuccess(data) {
            dispatch({
                type: transactionType.GET_TRANSACTION_DATA,
                payload: {
                    data
                }
            });
        }

        const token = localStorage.getItem("token");
        try {
            if(token) {
                const url = `http://localhost:5000/api/user/transactions`;
                axios.get(url, {
                    headers: {
                        'Authorization': 'Bearer '+token
                    },
                }).then(({ status, data}) => {
                    if(data) {
                        return onSuccess(data.data);
                    }
                }).catch((e) => console.log(e));
            } else {
                return onSuccess(null);
            }
        } catch(error) {

        }
    }
}