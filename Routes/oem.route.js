let express=require("express")
const { OemModel } = require("../Model/oem.model")
let oemRouter=express.Router()


oemRouter.post("/add",async(req,res)=>{
    try{
let oem=new OemModel(req.body)
await oem.save()
res.status(200).json({msg:"Oem added","OEM":req.body})
    }catch(err){
res.status(400).json({error:err.message})
    }
})

//Read
oemRouter.get("/",async(req,res)=>{
    
    try{
        let Oem=await OemModel.find()
        res.send(Oem)
       
    }catch(err){
        res.status(400).json({error:err.message})
    }
})
module.exports={
    oemRouter
}