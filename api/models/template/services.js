const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    name: String,
    text: String,
    photo: String  
});

module.exports = mongoose.model("Services", servicesSchema);