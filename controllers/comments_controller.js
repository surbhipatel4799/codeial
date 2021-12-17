const Comment = require('../models/comment');
const Post = require('../models/post')

module.exports.Create = function (req, res) {
    // check if the current post exist
    Post.findById(req.body.post, function (err, post) {
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            }, function(err, comment){
                // created comment, add post id and user id to comment, now add comment id to post
                // mongoDB functionality to get comment Id and add it to post->comment
                post.comments.push(comment);
                post.save(); // on updating DB we need to call save function to save in DB
                res.redirect('/');
            });
        }
    });
}