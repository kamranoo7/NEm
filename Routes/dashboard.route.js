let express=require("express")
const { DashboardModel } = require("../Model/dashboard.model")
let dashboardRouter=express.Router()


//Create
dashboardRouter.post("/create",async(req,res)=>{
    let payload=req.body
    try{
let data=new DashboardModel(payload)
await data.save()
res.status(200).json({msg:"New Data has been Added"})
    }catch(err){
res.status(400).json({error:err.message})
    }
})
//Get
dashboardRouter.get("/",async(req,res)=>{ 
let query=req.query
    try{
let data=await DashboardModel.find(query)
res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
//Tech
dashboardRouter.get("/tech",async(req,res)=>{ 
    
        try{
    let data=await DashboardModel.find({department:"Tech"})
    res.send(data)
        }catch(err){
            res.status(400).json({error:err.message})
        }
    })
//Marketing
dashboardRouter.get("/operation",async(req,res)=>{ 
    
    try{
let data=await DashboardModel.find({department:"Operation"})
res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
//Operation
dashboardRouter.get("/marketing",async(req,res)=>{ 
    
    try{
let data=await DashboardModel.find({department:"Marketing"})
res.send(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
//Update
dashboardRouter.patch("/update/:postID",async(req,res)=>{
    let {postID}=req.params
    let post=await DashboardModel.findOne({_id:postID})
    try{
if(req.body.authorID!==post.authorID){
    res.status(200).json({msg:"You are not Authorised"})
}else{
    await DashboardModel.findByIdAndUpdate({_id:postID},req.body)
    res.status(200).json({msg:"The Data has been Updated"})
}
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})
//Delete
dashboardRouter.delete("/delete/:postID",async(req,res)=>{
    let {postID}=req.params
    let post=await DashboardModel.findOne({_id:postID})
    try{
if(req.body.authorID!==post.authorID){
    res.status(200).json({msg:"You are not Authorised"})
}else{
    await DashboardModel.findByIdAndDelete({_id:postID})
    res.status(200).json({msg:"The Data has been deleted"})
}
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
})
//Pagination

dashboardRouter.get("/pages/:page",async(req,res)=>{
    try{
        let page=Number(req.params.page)
        console.log(page,"hello")
        let dataStart=(page-1)*5
        let player=await DashboardModel.find().skip(dataStart).limit(3)
        res.status(200).send(player)
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
})
//Ascending
dashboardRouter.get("/ascending",async(req,res)=>{
    try{
let data=await DashboardModel.find().sort({salary:1})
res.send(data)
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})
//descending
dashboardRouter.get("/descending",async(req,res)=>{
    try{
        let data=await DashboardModel.find().sort({salary:-1})
        res.send(data)
    }catch(err){
        res.status(400).send({"msg":err.message}) 
    }
})
module.exports={
    dashboardRouter
}