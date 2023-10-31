const express = require('express')
const app= express()
const mongoose = require('mongoose')
const loginRouter = require('./routs/loginRouter')
const makeRouter =require('./routs/makeRouter')
const registerRouter = require('./routs/registerRouter')
const cors= require('cors')
const joinRouter = require('./routs/joinRouter')

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

// setting headers
app.use((req,res,next)=>{
    res.setHeader('Access-Controll-Allow-Origin','*');
    res.setHeader('Access-Controll-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Controll-Allow-Headers','Content-Type,Authorization');
    next();
});

const mongoDBurl = "mongodb+srv://jidhinsyam:098765@trip.s2ge6sl.mongodb.net/"
mongoose.connect(mongoDBurl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("database connected"); 
}).catch((error) => {
    console.log(error);

})

app.use('/register',registerRouter),
app.use('/login',loginRouter),
app.use('/make' ,makeRouter),
app.use('/join' ,joinRouter)
 


 
 


app.listen(1000, () => { console.log("server started at http://localhost:1000"); })