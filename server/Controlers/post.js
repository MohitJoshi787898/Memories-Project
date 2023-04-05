import PostMessage from "../models/post.js";
export const getPosts = async (req, res) => {
    const data = await PostMessage.find()
    // console.log("GET POST request", data)
    res.status(200).json(data);
}
export const getPostsBySearch=async (req, res) => {
    const {search,tags}=req.query
    console.log("GET POST request",search,tags)
    const title=new RegExp(search,'i')
    const posts=await PostMessage.find({$or:[{title},{tags:{$in:tags.split(',')}}]});
    res.json(posts);
}
export const createPost = async (req, res) => {
    console.log(req.body)
    const post = req.body
    const newPost = await new PostMessage(post);
    console.log(req.body)
    newPost.save();
    res.json(newPost);
}
export const deletePost = async (req, res) => {
    try {
        await PostMessage.findByIdAndDelete(req.params.id);
        console.log("post deleted")
        res.json(req.params.id);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

}
export const updatePost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = req.body;
        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
        console.log(updatedPost)
        res.json(updatedPost);
    } catch (error) {
        res.status(400).json({ message: "some error" });
    }

}
export const likePost=async (req, res) => {
    try{
        const id=req.params.id;
        const user_id=req.body.user_id;
        // console.log(user_id);
        const post=await PostMessage.findById(id)
        const index=post.likes.findIndex((like)=>like===user_id);
        if(index===-1){
            // user want to like this post
            post.likes.push(user_id);
            // const updatelike=await PostMessage.findById(_id,post,{new:true})
            
            
        }else{
            //User want to remove like
            post.likes=post.likes.filter((like)=>like!==String(user_id)) 
        }
        const updatePost=await PostMessage.findByIdAndUpdate(id,{...post},{new:true})
        // console.log(updatePost )
        // const updatePost=await PostMessage.findByIdAndUpdate(_id,{likeCount:post.likeCount+1},{new:true})
        res.json(post.likes)
    }
    catch(err){
        console.log("error")
        res.status(400).json({ message: "some error" });
    }
}