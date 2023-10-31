const mongoose = require('mongoose');
const Schema=mongoose.Schema
const joinSchema=new Schema({
userId:{type:mongoose.Types.ObjectId,ref:"register_tb"},
date:{type:String},
time:{type:String},
from:{type:String},
to:{type:String},
})
const joinModel=mongoose.model('join_tb',joinSchema)
module.exports=joinModel