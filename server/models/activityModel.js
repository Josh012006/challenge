const mongoose = require('mongoose');


const activitySchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String
}, { timestamps: true });



module.exports = mongoose.models.Activity || mongoose.model('Activity', activitySchema);


