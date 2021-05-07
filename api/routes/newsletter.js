const router = require('express').Router();
const Newsletter = require('../models/newsletter');

router.post('/newsletters', async (req, res) => {
    try {
        const newsletter = new Newsletter();
        newsletter.email = req.body.email;

        await newsletter.save();

        res.json({
            success: true,
            message: "Cadastrado com sucesso"
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

router.get('/newsletters', async (req, res) => {
    try {
        let newsletters = await Newsletter.find();
        res.json({
            success: true,
            newsletters: newsletters
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
});

module.exports = router;