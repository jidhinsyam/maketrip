const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registerSchema = new Schema({
   login_id:{type:Schema.Types.ObjectId,ref:'login_tb',reqired:true},
    name:{type:String,required:true},
    adress:{type:String,required:true},
    contact:{type:String,required:true},
    age:{type:String,required:true},
    role:{type:String,reqired:true},
    
})
const registerModel = mongoose.model('register_tb',registerSchema)
module.exports = registerModel