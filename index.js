let express=require("express")
const { connection } = require("./db")



let cors=require("cors")
const { carRouter } = require("./Routes/car.route")
const { enventoryRouter } = require("./Routes/enventory.routes")
const { oemRouter } = require("./Routes/oem.route")
const { auth } = require("./Middleware/auth.middleware")
const { userRouter } = require("./Routes/user.routes")

let app=express()
require("dotenv").config()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use(auth)
app.use("/car",carRouter)
app.use("/enventory",enventoryRouter)
app.use("/oem",oemRouter)
//Server connection
app.listen(process.env.port,async()=>{
    try{
await connection
console.log("Connected to DB")
    }catch{
        console.log(err)
        console.log("Not Connected To DB")
    }
    console.log("Server is running")
})