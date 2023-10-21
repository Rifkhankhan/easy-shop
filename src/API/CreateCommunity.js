import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/' });

export const createCommunity = (data) => API.post('/community/', data);

export const userCommunities = (id) => API.get(`/community/${id}`);

export const getCommunity = (id) => API.get(`community/${id}/community`);

export const getALlCommunityPosts = (id) =>
	API.get(`community_post/${id}/community_posts`);

export const gatAllCommunities = () => API.get(`/community/communities`);

export const newRequest = (id, data) =>
	API.put(`community/${id}/com-request`, { communityId: data });

export const likePost = (id, userId) =>
	API.put(`community_post/${id}/like`, { userId: userId });

export const dislikePost = (id, userId) =>
	API.put(`community_post/${id}/dislike`, { userId: userId });

export const inviteFriend = (id, comId, invitedId) =>
	API.put(`community/${id}/invite`, {
		communityId: comId,
		invitedUserId: invitedId
	});
export const cancelInviteFriend = (id, comId) =>
	API.put(`community/${id}/invite-cancel`, { communityId: comId });

export const cancelJoinRequest = (id, comId) =>
	API.put(`community/${id}/cancel-req`, { communityId: comId });
