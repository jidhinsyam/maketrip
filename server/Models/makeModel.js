const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const makeSchema = new Schema({
     userId:{type:mongoose.Types.ObjectId,ref:"register_tb"},
    date:{type:String},
    arrtime:{type:String},
    dpttime:{type:String},
    from:{type:String},
    to:{type:String},
    vehicle:{type:String},
})
const makeModel = mongoose.model('tripmake_tb',makeSchema)
module.exports =makeModel