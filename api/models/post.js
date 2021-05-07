const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    owner: { type: Schema.Types.ObjectId, ref: 'Owner' },
    date: String,
    title: String,
    paragraph: String,
    slug: { type: String, unique: true },
    description: String,
    photo: String,
    title2: String,
    paragraph2: String
    
    
});

module.exports = mongoose.model("Post", postSchema);