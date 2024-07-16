const Event = require('../models/eventModel');


// Create a new event
exports.createEvent = async (req, res) => {

    try {
        const { name, description, date, location } = req.body;

        const myFile = req.file;

        const newOne = await new Event({ name, description, date, location, imageUrl: myFile.filename });
        const event = await newOne.save();

        return res.status(201).json({ event });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

exports.getAllEvents = async (req, res) => {
    
    try {
        const events = await Event.find();
        res.status(200).json({ events });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
