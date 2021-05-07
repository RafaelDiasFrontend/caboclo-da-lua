const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InstructorSchema = new Schema({
  name: String,   
  description: String,
  slug: String,
  photo: String
});

module.exports = mongoose.model("Instructor", InstructorSchema);