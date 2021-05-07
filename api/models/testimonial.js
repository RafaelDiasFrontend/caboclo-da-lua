const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  name: String,
  text: String,
  photo: String
});

module.exports = mongoose.model("Testimonial", TestimonialSchema);