const mongoose = require('mongoose');
const mongooseAlgolia = require('mongoose-algolia');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    instructor: { type: Schema.Types.ObjectId, ref: 'Instructor' },
    title: String,
    slug: { type: String, unique: true },
    description: String,
    photo: String,
    price: Number,
    stockQuantity: Number,
    rating: [{ type: Schema.Types.ObjectId, ref: "Review" }]
});

ProductSchema.plugin(mongooseAlgolia, {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_SECRET,
    indexName: process.env.ALGOLIA_INDEX,

    selector: "title _id photo description price owner",
    populate: {
        path: "owner reviews",      
    },
    debug: true
});

let Model = mongoose.model("Product", ProductSchema);
Model.SyncToAlgolia()
Model.SetAlgoliaSettings({
    searchableAttributes: ["title"]
})

module.exports = Model;