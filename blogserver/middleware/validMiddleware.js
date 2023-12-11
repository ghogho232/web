module.exports=formValidMW=(req,res,next)=>{
    if(req.body.title == null || req.body.body == null || req.body.files == null){
        return res.redirect("/post/new");
    }
    next();
}