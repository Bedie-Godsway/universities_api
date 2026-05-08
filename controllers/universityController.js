import University from "../models/universityModel.js";

// Get all universities
export const getUniversities = async (req, res) =>{
   try {     const universities = await University.find({}).sort({createdAt: -1});
     res.status(200).json({
        success: true,
        count: universities.length,
        data: universities,
    });
   }
   catch(error) {
    res.status(500).json({
        success: false,
        message: "Server error",    
        error: error.message,
    })
   }
};

// Get university by ID
export const getUniversityById = async (req, res) =>{
   try {
       const university = await University.findById(req.params.id);
       if (!university) {
           return res.status(404).json({
               success: false,
               message: "University not found",
           });
       }
       res.status(200).json({
           success: true,
           data: university,
       });
   }
   catch(error) {
       res.status(500).json({
           success: false,
           message: "Server error",
           error: error.message,
       })
   }
};

// Create a new university
export const createUniversity = async (req, res) =>{
   try {
       const university = await University.create(req.body);
       res.status(201).json({
           success: true,
           data: university,
       });
   }
   catch(error) {
       res.status(500).json({
           success: false,
           message: "Server error",
           error: error.message,
       })
   }
};


// Update University
export const updateUniversity = async (req, res) =>{
   try {
       const university = await University.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
       if (!university) {
           return res.status(404).json({
               success: false,
               message: "University not found",
           });
       }
       res.status(200).json({
           success: true,
           data: university,
       });
   }
   catch(error) {
       res.status(500).json({
           success: false,
           message: "Server error",
           error: error.message,
       })
   }
};

// Delete University
export const deleteUniversity = async (req, res) =>{
   try {
       const university = await University.findByIdAndDelete(req.params.id);
       if (!university) {
           return res.status(404).json({
               success: false,
               message: "University not found",
           });
       }
       res.status(200).json({
           success: true,
           message: "University deleted successfully",
       });
   }
   catch(error) {
       res.status(500).json({
           success: false,
           message: "Server error",
           error: error.message,
       })
   }
};