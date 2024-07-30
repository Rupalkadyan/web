import express from "express"
import cors  from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import userRouter from "./routes/userroute.js"
import cartRouter from "./routes/cartroute.js"
import 'dotenv/config'
import orderRouter from "./routes/orderroute.js"

// app config
const app = express()
const port = 3000
// middleware 
app.use(express.json())
app.use(cors())
//api endpoints
app.use('/api/food', foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order" ,orderRouter)

// are here
// db connection
connectDB();
app.get("/",(req,res)=>{
    res.send('APIWOrking')
})
app.listen(port,()=>{
    console.log(`server is listening on ${port}`)
})
//mongodb+srv://rupal:Rupal123@cluster0.4dm86jp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
