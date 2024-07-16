const Activity = require('../models/activityModel');



// Create a new activity
exports.createActivity = async (req, res) => {

    try {
        const { name, description } = req.body;

        const myFile = req.file;

        const newOne = await new Activity({ name, description, imageUrl: myFile.filename });
        const activity = await newOne.save();

        return res.status(201).json({ activity });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

exports.getAllActivities = async (req, res) => {
    
    try {
        const activities = await Activity.find();
        res.status(200).json({ activities });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
