const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const activityRoutes = require('./routes/activityRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const courseRoutes = require('./routes/courseRoutes');
const eventRoutes = require('./routes/eventRoutes');

require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log("Connected to database!");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client/public")));



app.use('/api/activity', activityRoutes);
app.use('/api/user', userRoutes);
app.use('/api/task', taskRoutes);
app.use('/api/course', courseRoutes);
app.use('/api/event', eventRoutes);




app.get('/api', (req, res) => {
    res.json({ message: 'Hello from server!' });
});



app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})