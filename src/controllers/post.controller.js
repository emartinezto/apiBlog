const Post =  require('../models/post.model');

const getAll = async (req, res) => {
    const posts = await Post.selectAll();
    res.json(posts);
}

const getByID = async (req, res) => {
    res.json(req.post);
}

module.exports = { 
    getAll,
    getByID
}