import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getTopicCategories = () => API.get('/topic/topics');

export const getTopicPost = (data) => API.get(`/topic_post/name/${data}`);

export const likeTopicPost = (id, userId) =>
	API.put(`topic_post/${id}/like`, { userId: userId });
