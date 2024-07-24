import mongoose  from "mongoose";

export const connectDB=async()=>{
      await mongoose.connect('mongodb+srv://alakshmi012:bala2003@cluster0.xzovjtq.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}