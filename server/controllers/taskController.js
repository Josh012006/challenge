const Task = require('../models/taskModel');
const User = require('../models/userModel');

// Create a new task
exports.createTask = async (req, res) => {

    try {
        const { task, description, dueDate } = req.body;
        const newTask = await new Task({ task, description, dueDate });
        const savedTask = await newTask.save();
        res.status(201).json({ task: savedTask });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}


// Get all tasks
exports.getAllTasks = async (req, res) => {

    try {
        const { id } = req.params;

        const user = await User.findById(id);
        if(!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        else {
            const taskTable = user.taskTable;
            const tasks = await Task.find({ _id: { $in: taskTable } });
            res.status(200).json({ tasks });
        }
        


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}


// Modify a task
exports.updateTask = async (req, res) => {

    try {
        const { id } = req.params;
        const { task, description, dueDate } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, { task, description, dueDate }, { new: true });
        if(!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        else {
            res.status(200).json({ task: updatedTask });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}


// Delete a task
exports.deleteTask = async (req, res) => {

    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        
        if(!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        else {
            res.status(200).json({ message: 'Task deleted successfully' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// Mark a task as completed
exports.completeTask = async (req, res) => {

    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, { status: 'completed' }, { new: true });
        
        if(!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }
        else {
            res.status(200).json({ task: updatedTask });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}