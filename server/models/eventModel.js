const mongoose = require('mongoose');



const eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    location: String,
    imageUrl: String
}, { timestamps: true });




module.exports = mongoose.models.Event || mongoose.model('Event', eventSchema);