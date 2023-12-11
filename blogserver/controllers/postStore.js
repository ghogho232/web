const path=require('path');
const BlogPostModel=require('../models/BlogPostModel');
module.exports=async (req,res)=>{
    console.log(req.body);
    //save to db
    //BlogPostModel.create(req.body).then(data=>{console.log(data)});
    const image = req.files.image;
    image.mv(path.resolve(__dirname, 'public/images/', image.name), async(err)=>{
        if(err){
            console.log(err);
        }
        const data = await BlogPostModel.create({
            ...req.body, //객체 해체
            image:'/images/'+image.name
        });
        res.redirect('/');
        console.log(data);
    });
    // const data = await BlogPostModel.create(req.body);
    // console.log(data);
    // res.redirect('/');
}