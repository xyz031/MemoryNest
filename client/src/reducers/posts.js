import { CREATE, DELETE, UPDATE, FETCH_ALL, LIKE } from '../constants/actionTypes.js';

const postsReducer = (posts = [], action) => {  // Define the reducer function first
    switch (action.type) {
        case DELETE:
            console.log('deleted');
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            console.log('updating card in reducers');
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case LIKE:
            console.log('updating card in reducers');
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case CREATE:
            console.log('creating card in reducers');
            return [...posts, action.payload];
        case FETCH_ALL:
            return action.payload;
        default:
            return posts;
    }
};

export default postsReducer;  // Export the reducer here
