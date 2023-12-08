const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const BlogPostModel=require('./models/BlogPostModel');

mongoose.connect('mongodb://localhost/BlogDB');

const app=express();
app.use(express.static('./public/'));
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');

app.get('/', async (req,res)=>{
    //res.sendFile(path.resolve(__dirname, "views/index.html"));
    const posts=await BlogPostModel.find({});
    console.log(posts);
    res.render('index', {posts});
});
app.get('/about',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, "views/about.html"));
    res.render('about');
});
app.get('/contact',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, "views/contact.html"));
    res.render('contact');
});
app.get('/post/new',(req,res)=>{
    //res.sendFile(path.resolve(__dirname, "views/create.html"));
    res.render('create');
});
app.get('/post/:id', async (req,res)=>{
    let apost = await BlogPostModel.findById(req.params.id);
    console.log(apost);
    //res.sendFile(path.resolve(__dirname, "views/post.html"));
    res.render('post', {apost});
});
app.post('/post/store', async (req,res)=>{
    console.log(req.body);
    //save to db
    //BlogPostModel.create(req.body).then(data=>{console.log(data)});
    const data = await BlogPostModel.create(req.body);
    console.log(data);
    res.redirect('/');
});
app.listen(3300, ()=>{console.log('server on port 3300')});