const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    taskTable: {
        type: Array,
        default: []
    }
}, { timestamps: true });


module.exports = mongoose.models.User || mongoose.model('User', userSchema);