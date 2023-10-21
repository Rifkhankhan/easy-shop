import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const createShop = (formData) => API.post('/shop', formData);
export const getShop = (id) => API.get(`/shop/${id}`);
export const deleteShop = (id) => API.delete(`/shop/${id}`);
export const updateShop = (id,formData) => API.put(`/shop/${id}`,formData);
export const getShops = () => API.get('/shop');
export const imageUpload = (formData) => API.post('https://res.cloudinary.com/dcyr3gn8d/image/upload/v1676536247/HomeDelivery/shops',formData)
