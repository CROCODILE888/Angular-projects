// const http = require ('http');
// const fs = require ('fs');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users = require('./MOCK_DATA (1).json');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

//middleware to use xx-encoded data as using postman
app.use(express.urlencoded({extended: false}));

//mongoDB configuration
mongoose.connect('mongodb://127.0.0.1:27017/login-project')
.then(()=>console.log("MongoDB connected"))
.catch((err)=> console.log("Error >>> ", err));

//schema of login inputs
const loginSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true});

//model of the login schema
const User = mongoose.model("loginInformation", loginSchema);

//api starts here
//Create a new user api
app.post('/create-user', async (req,res)=>{
    const body = req.body;
    if (!body || !body.userName || !body.password){
        return res.status(400).json({msg: "All fields are required"});
    }

    const result = await User.create({
        userName: body.userName,
        password: body.password
    });

    console.log("Result >>> ", result);
    return res.status(201).json({msg: "User created"});
});

//login api
app.post('/login', async(req, res)=>{
    const body = req.body;
    const { userName, password} = req.body;

    const userData = await User.findOne({userName});
    // const userData = await User.findOne({$and: [ { userName }, { password }]});
    const pass = userData? userData.password:null;
    if (!userData){
        return res.status(404).json({msg: "User not found"})
    } else
    if(pass != password){
        return res.status(404).json({msg: "Password incorrect"})
    } else {
        return res.status(200).json({msg: "Login successful"});
    }
})

//api to send users data
app.get('/users', (req,res)=>{
    // const html= `
    //     <ul>
    //     ${users.map((user)=>`<li>${user.username}</li>`).join("")}
    //     </ul>
    // `
    res.send(users)
})

app.listen(port,()=> console.log(`Server started at port ${port}`));