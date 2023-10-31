const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  email:{ type:String,required:true},
  password:{ type:String,required:true},
  role:{ type:String,requred:true},
  
})
const loginModel= mongoose.model('login_tb',loginSchema)
module.exports=loginModel
