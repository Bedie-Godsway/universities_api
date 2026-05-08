// Import packages
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDatabase from "./config/database.js";
import universityRoutes from "./routes/universityRoute.js";
// Another way of importing the dotenv 
// import dotenv from "dotenv";
// dotenv.config();  


// Initialize express
const app = express();

// Set up the PORT
const PORT = process.env.PORT

// Enable CORS
app.use(cors());

// Pass incoming request with JSON 
app.use(express.json());


// Connect to Database
connectDatabase();

// Home Route
app.get("/", (req, res) => {
    res.send({message:"WELCOME TO UNIVERSITY API built by KHIN6"});
});

// Define routes
app.use("/api/universities", universityRoutes);

// Start the server
app.listen(PORT, ()=> {
    console.log(`Server running on PORT: localhost:${PORT}`);
});

