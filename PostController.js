import Post from "./Post.js";

class PostController {
    async create (req, res) {
        try {
            const { author, title, content, picture } = req.body
            const post = await Post.create ({ author, title, content, picture })
            res.json (post)
        } catch (e) {
            res.status (500).json (e)
        }
    }

    async getAll (req, res) {
        try {
            const posts = await Post.find();
            return res.json(posts)
        } catch (e) {
            res.status (500).json (e)
        }
    }

    async getOne (req, res) {
        try {
            const {id} = req.params
            if(!id){
                res.status(400).json({ message: 'Id не найден' })
            }
            const posts = await Post.findById(id);
            return res.json(posts)
        } catch (e) {
            res.status (500).json (e)
        }
    }

    async getUpdate (req, res) {
        try {
            const posts = req.body
            if(!posts._id){
                res.status(400).json({ message: 'Id не найден' })
            }
            const updatedPost =  await Post.findByIdAndUpdate(posts._id, posts, {new: true})
            return res.json(updatedPost)
        } catch (e) {
            res.status (500).json (e)
        }
    }

    async getDelete (req, res) {
        try {
            const {id} = req.params
            if(id){
                res.status(400).json({ message: 'Id не найден' })
            }
            const post = await Post.findByIdAndDelete(id)
            return res.json.post
        } catch (e) {
            res.status (500).json (e)
        }
    }

}

export default new PostController ();