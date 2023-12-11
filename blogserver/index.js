const express=require('express');
// const path=require('path');
const mongoose=require('mongoose');
const fileUploader=require('express-fileupload');
// const BlogPostModel=require('./models/BlogPostModel');

const newPostConstroller=require('./controllers/newPost');
const homeController=require('./controllers/home');
const storePostController=require('./controllers/postStore');
const postStoreController = require('./controllers/postStore');
const postController=require('./controllers/post');
const validMiddleware=require('./middleware/validMiddleware');

mongoose.connect('mongodb://localhost/BlogDB');

const app=express();
app.use(express.static('./public/'));
app.use(express.urlencoded({extended:true})); //body,title등
app.set('view engine','ejs');
app.use(fileUploader()); //files객체 만들기
app.use("/post/store", formValidMW);

app.get('/', homeController);
// app.get('/about',(req,res)=>{
//     //res.sendFile(path.resolve(__dirname, "views/about.html"));
//     res.render('about');
// });
// app.get('/contact',(req,res)=>{
//     //res.sendFile(path.resolve(__dirname, "views/contact.html"));
//     res.render('contact');
// });
app.get('/post/new',newPostConstroller);
app.get('/post/:id', postController);
app.post('/post/store', postStoreController);

app.listen(3300, ()=>{console.log('server on port 3300')});