import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";

// Configure dotenv
dotenv.config();

const connectDatabase = async () => {
    try{
        const  connectMongoDB = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected: ${connectMongoDB.connection.host}`);
    }
    catch(error) {
        console.error("Error connecting to MongoDB: ", error.message);
        process.exit(1);
    }  
}

export default connectDatabase