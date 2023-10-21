import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getComMessages = (id) => API.get(`/com_message/${id}`);

export const addComMessage = (data) => API.post('/com_message/', data);
