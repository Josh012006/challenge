const router = require('express').Router();


const { createActivity, getAllActivities } = require('../controllers/activityController');
const upload = require('../utils/multerConfig');


router.post('/create', upload.single('image'), createActivity);
router.get('/getAll', getAllActivities);




module.exports = router;