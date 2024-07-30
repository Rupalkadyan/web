import mongoose from "mongoose";
export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://rupal:Rupal123@cluster0.4dm86jp.mongodb.net/fooddeliv")
    .then(()=>console.log("DB connected"))
}