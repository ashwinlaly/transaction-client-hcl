import axios from 'axios';
const BASE_URL = "http://localhost:5000/api"

const config = () => {
    let token = window.localStorage.getItem("token");
    let config = {}
    if(token !== null)
        config = {
            headers : {'Authorization': 'Bearer '+token}
    }
    return config;
}

const responseBody = res => res.data;

const request = {
    get : async (url) => {
        let configuration = await config()
        return await axios.get(`${BASE_URL}${url}`, configuration).then(responseBody)
    }
}

export default request;