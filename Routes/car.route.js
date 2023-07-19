let express=require('express')

const { CarModel } = require('../Model/car.model')
let carRouter=express.Router()

//Post
carRouter.post("/add",async(req,res)=>{
    try{
let car=new CarModel(req.body)
await car.save()
res.status(200).json({msg:"car added","addedCar":req.body})
    }catch(err){
res.status(400).json({error:err.message})
    }
})

//Get
carRouter.get("/",async(req,res)=>{
    
    try{
        let car=await CarModel.find()
        res.send(car)
       
    }catch(err){
        res.status(400).json({error:err.message})
    }
})


//Update
carRouter.patch("/update/:postID",async(req,res)=>{
    
    let {postID}=req.params
    let payload=req.body
    try{
        await CarModel.findByIdAndUpdate({_id:postID},payload)
        res.status(200).json({msg:"Car has been updated"})
    }catch(err){
        res.status(400).json({error:err.message})
    }
    })
    //delete
    carRouter.delete("/delete/:postID",async(req,res)=>{
        let {postID}=req.params
        let post=await CarModel.findOne({_id:postID})
        try{
            if(req.body.authorID!==post.authorID){
                res.status(200).send({"msg":"You are not Authorised"})
            }else{
                await CarModel.findByIdAndDelete({_id:postID})
                res.status(200).send({"msg":"The post has been deleted"})
            }
        }catch(err){
            res.status(400).send({"msg":err.message})
        }
        })
//Sort_Price_Ascending
carRouter.get("/ascending",async(req,res)=>{
    try{
let data=await CarModel.find().sort({price:1})
res.send(data)
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})
//Sort_Price_Descending
carRouter.get("/descending",async(req,res)=>{
    try{
        let data=await CarModel.find().sort({price:-1})
        res.send(data)
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})
//Colors
carRouter.get("/grey",async(req,res)=>{ 
    
    try{
let data=await CarModel.find({color:"grey"})
res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
carRouter.get("/red",async(req,res)=>{ 
    
    try{
let data=await CarModel.find({color:"red"})
res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
carRouter.get("/black",async(req,res)=>{ 
    
    try{
let data=await CarModel.find({color:"black"})
res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
carRouter.get("/white",async(req,res)=>{ 
    
    try{
let data=await CarModel.find({color:"white"})
res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
//Mileage
carRouter.get("/mileage1",async(req,res)=>{
    try{
        let data=await CarModel.find({$and:[{mileage:{$gte:10}},{mileage:{$lte:15}}]})
        res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
carRouter.get("/mileage2",async(req,res)=>{
    try{
        let data=await CarModel.find({$and:[{mileage:{$gte:16}},{mileage:{$lte:20}}]})
        res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
carRouter.get("/mileage3",async(req,res)=>{
    try{
        let data=await CarModel.find({$and:[{mileage:{$gte:21}},{mileage:{$lte:25}}]})
        res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

module.exports={
   carRouter
}