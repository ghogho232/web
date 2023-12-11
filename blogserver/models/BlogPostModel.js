const mongoose=require('mongoose');
const BlogPostSchema=new mongoose.Schema({
    name:{
        type:String,
        default:"ㅇㅇ"
    },
    title:String,
    body:String,
    date: {
        type:Date,
        default:new Date()
    },
    image: String
});
const BlogPostModel=mongoose.model('blogpost',BlogPostSchema);
module.exports=BlogPostModel;