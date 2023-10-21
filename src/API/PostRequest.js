import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
	API.put(`post/${id}/like`, { userId: userId });
export const dislikePost = (id, userId) =>
	API.put(`post/${id}/dislike`, { userId: userId });
export const sharePost = (pid, uid) =>
	API.put(`post/share`, { postId: pid, userId: uid });
export const deletePost = (id, uid) =>
	API.delete(`post/${id}`, { userId: uid });
export const getPostByUserId = (id) => API.get(`post/${id}/userPosts`);
