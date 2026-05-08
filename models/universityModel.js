 import mongoose from "mongoose";

const universitySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required:[ true, "University name is required"],
            trim: true,
            unique: true,
            unique: [true, "University name already exists"],
            minlength: [3, "Name must be at least 3 characters"],
        },

        location:
        {
            type: String,
            required:[ true, "University location is required"],
            trim: true,
            unique: true,
        },

        established:
        {
            type: Number, 
            required: [ true, "University established date is required"],
             min: [1000, "Year must be a valid number"],
            max: [new Date().getFullYear(), "Year cannot be in the future"],
        },

        website_url:
        {
            type: String,
            required: [ true, "University website URL is required"],
            trim: true,
        }   
    },

    {
        timestamps: true,
    }
)

const University = mongoose.model("University", universitySchema);

export default University;