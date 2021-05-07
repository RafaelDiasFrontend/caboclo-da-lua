const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    instructor: { type: Schema.Types.ObjectId, ref: 'Instructor' },    
    title: String,
    slug: { type: String, unique: true, required: true },   
    description: String,
    photo: String,
    price: Number,
    rating: Number,   
    rating: [{ type: Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = mongoose.model("Course", courseSchema);