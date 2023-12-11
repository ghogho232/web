const BlogPostModel=require("../models/BlogPostModel");

module.exports = async (req,res)=>{
    //res.sendFile(path.resolve(__dirname, "views/index.html"));
    const posts=await BlogPostModel.find({});
    console.log(posts);
    res.render('index', {posts});
}