const Post = require('../models/post.model');

const checkPostID = async (req, res, next) => {
    const { postID } = req.params;

    if (!postID || isNaN(postID)) {
        return res.status(400).json({ message: 'El ID del post es inválido' });
    }

    const post = await Post.selectByID(postID);
    if (!postID) {
        return res.status(404).json({ message: 'El ID del post no existe' });
    }

    req.post = post;
    
    next();
}

module.exports = {
    checkPostID
}