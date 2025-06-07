const Post =  require('../models/post.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    res.json(posts);
}

const getByID = async (req, res) => {
    res.json(req.post);
}

const createPost = async (req, res) => {
    const result = await Post.createPost(req.body);
    const newPost = await Post.selectByID(result.insertId);
    res.json(newPost);
}

module.exports = { 
    getAll,
    getByID,
    createPost
}