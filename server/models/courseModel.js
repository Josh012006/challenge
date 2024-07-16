const mongoose = require('mongoose');


const courseSchema = new mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    duration: String,
    price: Number,
}, { timestamps: true });   


module.exports = mongoose.models.Course || mongoose.model('Course', courseSchema);