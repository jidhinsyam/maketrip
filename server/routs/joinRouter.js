const express = require('express');
const joinModel = require('../Models/joinModel');
const joinRouter = express.Router()
 
 

joinRouter.post('/',async function(req,res){
    try{
        const join={
            userId:req.body.userId,
             date:req.body.date,
             time:req.body.time,
             from:req.body.from,
             to:req.body.to,
            
        }
 const join_data = await joinModel(join).save()
 if(join){
    return res.status(200).json({
        success:true,
        error: false,
        message: "form added",
        data:join
    })
 }
 }
 catch (error){
 
 }
 })

 joinRouter.get('/view-join',async function (req,res){

    try{
       
        const join  = await joinModel.find()
        if(join){
            return res.status(200).json({
                success: false,
                error: true,
                details: join,

            })
        }else{
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found",
            })
        }

            
        }catch{
            return res.status(400).json({
                success: false,
                error: true,
                message: "something went wrong",
            })

        }
})
 module.exports=joinRouter;
