let express=require("express")
const { EnventoryModel } = require("../Model/enventory.model")
let enventoryRouter=express.Router()

enventoryRouter.post("/add",async(req,res)=>{
    try{
let enventory=new EnventoryModel(req.body)
await enventory.save()
res.status(200).json({msg:"car added","enventoryInfo":req.body})
    }catch(err){
res.status(400).json({error:err.message})
    }
})
module.exports={
    enventoryRouter
}