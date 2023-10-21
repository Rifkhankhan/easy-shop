import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getProductsByType = (type) => API.get(`/product/products/${type}`);
export const getProducts = () => API.get('/product');
export const getProduct = (id) => API.get(`/product/${id}`);
export const createProduct = (formData) => API.post('/product', formData);
