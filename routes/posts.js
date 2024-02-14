const express = require('express');
const Post = require('../models/postModel');
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({message:"Get all posts!"});
});

router.post('/', async (req, res)=>{
    const {title, description} = req.body;
    try {
        const post = await Post.create({title, description});
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

router.get('/:id',(req, res)=>{
    const postId = req.params.id;
    res.status(200).json({message:"Get "+ postId});
});

router.delete('/:id',(req, res)=>{
    const postId = req.params.id;
    res.status(200).json({message:"Delete "+ postId});
});

router.patch('/:id',(req, res)=>{
    const postId = req.params.id;
    res.status(200).json({message:"Update "+ postId});
});


module.exports = router;