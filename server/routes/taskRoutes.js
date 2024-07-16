const router = require('express').Router();

const { createTask, getAllTasks, updateTask, deleteTask, getSingleTask, completeTask } = require('../controllers/taskController');




router.post('/create', createTask);
router.get('/getAll/:id', getAllTasks);
router.put('/update/:id', updateTask);
router.delete('/delete/:id', deleteTask);
router.patch('/markAsCompleted/:id', completeTask);



module.exports = router;
