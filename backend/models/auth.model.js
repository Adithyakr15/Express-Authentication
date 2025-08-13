import mongoose from "mongoose";

let authSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"username is required.."]
    }
})