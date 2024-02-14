const express = require('express');

const router = express.Router();

router.get('/',(req, res)=>{
    res.json({message:"Get all posts!"});
});

router.post('/',(req, res)=>{
    res.json({message:"Post to posts!"});
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