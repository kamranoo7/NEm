let mongoose=require("mongoose")
let carSchema=mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:Number,
    color:String,
    user:String,
    userID:String,
    mileage:Number
})
let CarModel=mongoose.model("car",carSchema)

module.exports={
    CarModel
}