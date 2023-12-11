const BlogPostModel=require('../models/BlogPostModel');

module.exports=async (req,res)=>{
    let apost = await BlogPostModel.findById(req.params.id);
    console.log(apost);
    //res.sendFile(path.resolve(__dirname, "views/post.html"));
    res.render('post', {apost});
}