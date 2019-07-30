const Post = require('../models/post')

module.exports = {
    async index(req, res){
        const posts = await Post.find().sort('-createdAt')
        return res.json(posts)
    },

    async store(req, res){
        const { author, place , decription, hashtags} = req.body
        const { filename : image} = req.file

        const post = await Post.create({
            author,
            place,
            decription,
            hashtags,
            image,

        })
        return res.json(post)
    }
}