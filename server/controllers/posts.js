import PostMessage from "../models/postMessage.js";
import mongoose from "mongoose";

// Get all posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve posts", error: error.message });
  }
};

// Create a new post
export const createPost = async (req, res) => {
  const post = req.body;

  try {
    const newPost = new PostMessage(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: "Failed to create post", error: error.message });
  }
};

// Update a post
export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).json({ message: "No post with that ID" });
  }

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: "Failed to update post", error: error.message });
  }
};

// Delete a post

// Make sure you import your PostMessage model

export const deletePost = async (req, res) => {
  const { id } = req.params;

  // Check if the id is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that ID" });
  }

  try {
    // Use findByIdAndDelete instead of findByIdAndRemove
    const deletedPost = await PostMessage.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: "No post found to delete" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error: error.message });
  }
};


// Like a post
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "No post with that ID" });
  }

  try {
    // Use $inc operator to increment likeCount
    const updatedPost = await PostMessage.findByIdAndUpdate(
      id,
      { $inc: { likeCount: 1 } },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to like post", error: error.message });
  }
};
