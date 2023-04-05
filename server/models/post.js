import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title: String,
    message:String,
    creator:String,
    name:String,
    selectedFile:String,
    tags:[String],
    likes:[String],
    createdAt:{type:Date,default:new Date()},
});
const PostMessage =mongoose.model('PostMessage',postSchema)

export default PostMessage;