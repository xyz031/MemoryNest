import axios from 'axios';

const url = "https://memorynest.onrender.com/posts";  // Fixed the URL

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (_id, updatedPost) => axios.patch(`${url}/${_id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
