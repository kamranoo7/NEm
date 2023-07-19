let mongoose=require("mongoose")
let enventorySchema=mongoose.Schema({
    kms:Number,
    major_scratches:Number,
    originalpaint:String,
    number_of_accident:Number,
    number_of_previous_buyer:Number,
    registration_place:String,
})
let EnventoryModel=mongoose.model("enventory",enventorySchema)
module.exports={
    EnventoryModel
}