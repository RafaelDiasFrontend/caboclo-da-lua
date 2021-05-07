const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({    
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    title: String,
    slug: { type: String, unique: true },
    description: String,   
    price: Number,
    stockQuantity: Number,
    rating: [{ type: Schema.Types.ObjectId, ref: "Review" }]
});

module.exports = mongoose.model("Budget", budgetSchema);