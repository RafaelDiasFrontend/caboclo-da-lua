const router = require('express').Router()
const Product = require('../models/product');
const Testimonial = require('../models/testimonial');
const Portfolio = require('../models/portfolio');



// TOTAL PRODUCTS
router.get('/productCount', async (req, res) => {
    Product.countDocuments({} ,function(err, result){
        if(err){
            res.json({
                message: err.message,
                success: false
            });
            
        }
        if(result){
            res.json({
                prodQtd: result,
                success: true,
            })
        }
    });
});

// TOTAL TESTIMONIAL
router.get('/testimonialCount', async (req, res) => {
    Testimonial.countDocuments({} ,function(err, result){
        if(err){
            res.json({
                message: err.message,
                success: false
            });
            
        }
        if(result){
            res.json({
                testiQtd: result,
                success: true,
            })
        }
    });
});

// TOTAL PORTFOLIO
router.get('/portfolioCount', async (req, res) => {
    Portfolio.countDocuments({} ,function(err, result){
        if(err){
            res.json({
                message: err.message,
                success: false
            });
            
        }
        if(result){
            res.json({
                portQtd: result,
                success: true,
            })
        }
    });
});

 module.exports = router;