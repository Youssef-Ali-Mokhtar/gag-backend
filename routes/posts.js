const express = require('express');
const {
    getPosts,
    createPost,
    getPost,
    deletePost,
    updatePost
} = require('../controllers/postControllers');

const router = express.Router();

//Get all posts
router.get('/',getPosts);

//Create post
router.post('/', createPost);

//Get post
router.get('/:id', getPost);

//Delete post
router.delete('/:id', deletePost);

//Update post
router.patch('/:id', updatePost);


module.exports = router;