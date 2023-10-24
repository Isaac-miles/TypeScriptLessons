import axios from 'axios';

const BASE_URL ='http://192.168.8.101:5005'
export default axios.create({
    // baseURL: 'http://EBKTECH-L930:5005'
    baseURL: BASE_URL
    // baseURL: 'http://localhost:3500'
});

export const  axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers:{'Content-Type': 'application/json'},
    withCredentials:true
});