import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });


export const createFruit = (formData) => API.post('/product', formData);
export const getFruit = (id) => API.get(`/product/fruits/${id}`);
export const deleteFruit = (id) => API.delete(`/product/${id}`);
export const updateFruit = (id,formData) => API.put(`/product/${id}`,formData);
export const pushImage = (id,formData) => API.put(`/product/pushImage/${id}`,formData);
export const deleteImage = (id,formData) => API.put(`/product/deleteImage/${id}`,formData);


export const getFruits = () => API.get('/product/fruits');
export const getProducts = (type) => API.get(`/product/products/${type}`);

export const imageUpload = (formData) => API.post('https://res.cloudinary.com/dcyr3gn8d/image/upload/v1676536247/HomeDelivery/fruits',formData)

export const likeProduct = (id,formData) => API.put(`/product/like/${id}`,{userId:formData});
export const buyProduct = (formData) => API.put(`/product/buy`, formData);

export const getPendingProducts = () => API.get(`/product/pending`);

export const acceptBuyProduct = (id,formData) => API.put(`/product/${id}/accept`, formData); // pending id

export const getOrders = (id) => API.get(`/product/${id}/order` );

export const getProcessingList = () => API.get(`/product/process`);

export const finishProcessing = (id,formData) => API.get(`/product/${id}/finishProcess`,formData);

export const cancelOrder = (id,formData) => API.put(`/product/${id}/cancel`,formData);

export const getCancelList = () => API.get(`/product/cancel`);
export const getUserCancelList = (id) => API.get(`/product/${id}/cancel`); //

export const getShipList = () => API.get(`/product/shipped`);

export const finishShipping = (id,formData) => API.get(`/product/${id}/finishShipping`,formData);

export const getAllShipped = () => API.get(`/product/shipped`);
export const getUserShipped = (uid) => API.get(`/product/${uid}/shipped`);
export const returnProduct = (id,formData) => API.get(`/product/${id}/returns`,formData);
export const getReturns = () => API.get(`/product/returns` );
export const getUserReturns = (id) => API.get(`/product/${id}/returns`);

