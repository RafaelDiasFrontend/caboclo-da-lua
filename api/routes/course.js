const router = require('express').Router()
const Course = require('../models/course');
const multer = require('multer');
const upload = require('../middlewares/upload-photo');

// POST
router.post("/courses", upload.single("photo"), async (req, res) => {
    try {
        let course = new Course().populate('instructor');
            course.instructorID = req.body.instructorID,
            // course.categoryID = req.body.categoryID,
            course.title = req.body.title;
            course.slug = req.body.slug;
            course.price = req.body.price;
            course.description = req.body.description,                     
            course.photo = req.file.location,           

            await course.save();
        res.json({
            status: true,
            message: "Curso cadastrado com Sucesso"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})
//GET request - get all products
router.get('/courses', async (req, res) => {
    try {
        let courses = await Course.find().populate('instructor').exec();
        res.json({
            success: true,
            courses: courses
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

//Get Single Products
router.get("/courses/:slug", async (req, res) => {
    try {
        let course = await Course.findOne({ slug: req.params.slug })
        .populate('instructor')
        .exec();
        res.json({
            success: true,
            course: course,
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

// PUT Update a single Product
router.put("/courses/:slug", upload.single("photo"), async (req, res) => {
    try {
        let course = await Course.findOneAndUpdate(
            { slug: req.params.slug },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    slug: req.body.slug,
                    category: req.body.categoryID,
                    photo: req.file.location,
                    description: req.body.description,
                    instructor: req.body.instructorID
                }
            },
            { upsert: true }
        );
        res.json({
            success: true,
            updatedCourse: course,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})


// DElETE - dele a single product
router.delete('/courses/:slug', async (req, res) => {
    try {
        let deletedCourse = await Course.findOneAndDelete({ slug: req.params.slug });
        if (deletedCourse) {
            res.json({
                status: true,
                message: "O curso foi excluido com sucesso"
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
})

module.exports = router;