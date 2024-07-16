const router = require('express').Router();

const { verifyUser } = require('../controllers/userController');


router.post('/verify', verifyUser);



module.exports = router;


