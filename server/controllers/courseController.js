const Course = require('../models/courseModel');



// Create a new course
exports.createCourse = async (req, res) => {

    try {
        const { name, description, duration, price } = req.body;

        const myFile = req.file;

        const newOne = await new Course({ name, description, duration, price, imageUrl: myFile.filename });
        const course = await newOne.save();

        return res.status(201).json({ course });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}



// Get all courses
exports.getAllCourses = async (req, res) => {
    
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}


// Get a single course
exports.getSingleCourse = async (req, res) => {
    
    try {
        const course = await Course.findById(req.params.id);
        if(!course) return res.status(404).json({ message: 'Course not found' });
        else return res.status(200).json({ course });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}