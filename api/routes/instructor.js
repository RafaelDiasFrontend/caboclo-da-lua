const router = require('express').Router()
const Instructor = require('../models/instructor');
const upload = require('../middlewares/upload-photo');

// Registering a Instructor
router.post('/instructors', upload.single("photo"), async (req, res) => {
    try {
        let instructor = new Instructor();
        instructor.name = req.body.name;       
        instructor.description = req.body.description;
        instructor.photo = req.file.location;
        await instructor.save();

        res.json({
            success: true,
            message: "Instrutor cadastrado com sucesso!"
        });
    } catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
});

// Getting All Instructors
router.get('/instructors', async (req, res) => {
    try {
        let instructors = await Instructor.find().exec();
        res.json({
            success: true,
            instructors: instructors
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});


module.exports = router;