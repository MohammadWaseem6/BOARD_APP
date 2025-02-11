import { createSlice } from "@reduxjs/toolkit";

// Import createSlice function from Redux Toolkit for creating slices of state
// A slice represents a piece of state and the associated reducers

const initialState = [
    // Initial state for the posts slice
    {
        id: '1',
        title: "learning RTK",
        content: "I will master RTK, until that I won't stop"
    },
    {
        id: '2',
        title: "learning RTK ,SLICES",
        content: "I will master RTK, and Slices"
    },
];

// Define the initial state for the posts slice, containing two sample posts

const postSlice = createSlice({
    // Create a slice for managing posts
    name: 'posts',
    // Name the slice 'posts', this will be used in the Redux store
    initialState,
    // Use the initial state defined above
    reducers: {
        // Define reducers to handle actions that modify the posts state
        postAdded: (state, action) => {
            // Reducer function for adding a new post
            state.push(action.payload);
            // Add the new post to the state array
        }
    }
});

export const selectAllPosts = (state) => state.posts;
// Selector function to retrieve all posts from the state

export const { postAdded } = postSlice.actions;
// Extract the postAdded action creator from the slice

export default postSlice.reducer;
// Export the reducer function generated by createSlice
