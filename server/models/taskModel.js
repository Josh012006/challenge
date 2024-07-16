const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    task: String,
    description: String,
    dueDate: String,
    status: {
        type: String,
        default: 'pending'
    },
}, { timestamps: true });



module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);