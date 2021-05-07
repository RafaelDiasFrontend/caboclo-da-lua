const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    type: { type: String, unique: true, required: true }
});

module.exports = mongoose.model("Service", ServiceSchema);