const router = require('express').Router();

const { createEvent, getAllEvents } = require('../controllers/eventController');
const upload = require('../utils/multerConfig');



router.post('/create', upload.single('image'), createEvent);
router.get('/getAll', getAllEvents);



module.exports = router;