import request from './API';
const _USER = "user";

export default {
    getAllTransacionByID : (_id) => {
        return request.get(`/${_USER}/transaction/${_id}`, _id);
    },
    getTransactions : () => {
        return request.get(`/${_USER}/transactions`)
    }
}