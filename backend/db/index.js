import mongoose from "mongoose";

async function dbConnect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1/authDb")
        console.log("Mongodb connected..");

    }
    catch{
        console.log("Mongodb connection failed..");
    }
}

export default dbConnect;