let mongoose=require("mongoose")
const oemSchema = new mongoose.Schema({
    model_name: String,
    year: Number,
    list_price: Number,
    colors: String,
    mileage: String,
    power: String,
    max_speed: String,
  });
   let OemModel=mongoose.model("oem",oemSchema)
   module.exports={
    OemModel
   }