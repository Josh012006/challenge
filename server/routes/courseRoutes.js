const router = require('express').Router();
const { createCourse, getAllCourses, getSingleCourse } = require('../controllers/courseController');
const upload = require('../utils/multerConfig');



router.post('/create', upload.single('image'), createCourse);
router.get('/getAll', getAllCourses);
router.get('/getOne/:id', getSingleCourse);




module.exports = router;



