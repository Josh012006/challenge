const User = require('../models/userModel');


// Create a new user
exports.verifyUser = async (req, res) => {

    try {
        
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });

        if (!user) {
            return res.status(404).json({ message: 'Invalid email or password' });
        }
        else {
            return res.status(200).json({ user });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}