const mongoose=require('mongoose');
const userModel=require('./models/UserModel');
mongoose.connect('mongodb://localhost/testDB');

userModel.create([{
    id:"me",
    age:24,
    addr:"gwangju"
},{
    id:"you",
    age:25,
    addr:"Seoul"
}]).then(result => {
    console.log(result);
});
//userModel.find({id:/me/}).then((data)=>(console.log(data)));
