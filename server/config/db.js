import mongoose from "mongoose";

const connectDB = async () =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/?directConnection=true")
        console.log("DB Connected");

    } catch (error) {
        console.error("error:", error);
        throw error;
    }
};

export default connectDB;