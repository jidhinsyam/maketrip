const express = require('express');
const makeModel = require('../Models/makeModel');
const makeRouter = express.Router()
 
 

makeRouter.post('/',async function(req,res){
    try{
        const make={
            userId:req.body.userId,
            date:req.body.date,
            arrtime:req.body.arrtime,
            dpttime:req.body.dpttime,
            from:req.body.from,
            to:req.body.to,
            vehicle:req.body.vehicle,
            
        }
 const make_data = await makeModel(make).save()
 if(make){
    return res.status(200).json({
        success:true,
        error: false,
        message: "form added",
        data:make
    })
 }
 }
 catch (error){
 
 }
 })

 makeRouter.get('/view-post',async function (req,res){

    try{
       
        const make  = await makeModel.find()
        if(make){
            return res.status(200).json({
                success: false,
                error: true,
                details: make,

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
 module.exports=makeRouter;