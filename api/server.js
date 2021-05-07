const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require("./models/user");
const {
    json
} = require('body-parser');

dotenv.config();

const app = express();

mongoose.connect(
    process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Conectado ao banco de dados");
        }
    }
);

// Middleware 
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Require apis

const userRoutes = require("./routes/auth");
const contactRoutes = require("./routes/contact");
const newsRoutes = require("./routes/newsletter");
const instructorRoutes = require("./routes/instructor");
const courseRoutes = require("./routes/course");

app.use('/api', userRoutes);
app.use('/api', contactRoutes);
app.use('/api', newsRoutes);
app.use('/api', instructorRoutes);
app.use('/api', courseRoutes);


app.listen(3006, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT", 3006);
    }
});