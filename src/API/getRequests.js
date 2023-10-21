import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getAllAdvertisements = () => API.get('/advertisement/');

export const getAllTrends = () => API.get('/trend/');

export const getAllFAQ = () => API.get('/faq/');
