import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const uploadImage = (data) => API.post('/upload/', data);
// export const uploadImage = (data)=> axios.post('https://api.cloudinary.com/v1_1/dubopkqcw/image/upload',data);
// axios.post("https://api.cloudinary.com/v1_1/dubopkqcw/image/upload", formData)
export const uploadPost = (data) => API.post('/post/', data);

export const uploadFeedback = (data) => API.post('/feedback/', data);

export const uploadDonation = (data) => API.post('/donation/', data);

export const uploadQuestion = (data) => API.post('/question/', data);

export const uploadCommentPost = (id, data) =>
	API.post(`post/${id}/comment`, data);

export const uploadCommentTopicPost = (id, data) =>
	API.post(`topic_post/${id}/comment`, data);

export const addEducation = (id, data) => API.put(`user/education/${id}`, data);
export const addSkill = (id, data) => API.put(`user/skill/${id}`, data);
export const addInterest = (id, data) => API.put(`user/interest/${id}`, data);

export const changeUserPassword = (id, data) =>
	API.put(`user/${id}/updatePassword`, data);

export const uploadCommunityPost = (data) => API.post('/community_post/', data);

export const forgotPassword = (data) => API.post('/user/forgot-password', data);

export const resetPassword = (id, data) =>
	API.put(`user/reset-password/${id}`, data);
export const newInviteRequest = (data) =>
	API.post('/user/invite-new-friend', data);

export const uploadCommunityCommentPost = (id, data) =>
	API.post(`community_post/${id}/comment`, data);

export const uploadBlog = (data) => API.post('/blog/', data);
