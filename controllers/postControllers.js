const Post = require('../models/postModel');
const mongoose = require('mongoose');


//get all posts
const getPosts = async (req, res)=>{

    try {
        const posts = await Post.find({}).sort({createdAt: -1});
        res.status(200).json(posts);
    } catch(error) {
        res.status(400).json({error: error.message});
    }

}

//create new post
const createPost = async (req, res)=>{
    const {title, description} = req.body;
    try {
        const post = await Post.create({title, description});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

//Get post
const getPost = async (req, res)=>{
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such post!'});
    }

    const post = await Post.findById({ _id: id });

    if(!post) {
        return res.status(404).json({error: 'No such post!'})
    }
    res.status(200).json(post);
}

//delete post
const deletePost = async (req, res)=>{
    const { id } = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such post!'});
    }

    const post = await Post.findByIdAndDelete({ _id: id });

    if(!post) {
        return res.status(404).json({error: 'No such post!'})
    }
    res.status(200).json(post);
}

//update post
const updatePost = async (req, res)=>{
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such post!'});
    }

    const post = await Post.findByIdAndUpdate({ _id: id }, {...req.body});

    if(!post) {
        return res.status(404).json({error: 'No such post!'})
    }
    
    res.status(200).json(post);
}

module.exports = {
    getPosts,
    createPost,
    getPost,
    deletePost,
    updatePost
}