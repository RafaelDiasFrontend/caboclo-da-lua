const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({   
    name: { type: String, unique: true },  
    cpf: String, 
    email: { type: String, unique: true },   
    cellPhone: Number,
    phone: Number,
    address: String,
    car: String,
    licensePlate: String,
    carBrand: String,   
    carModel: String,
    carYear: String,
    repairType: String,
});
module.exports = mongoose.model("Customer", customerSchema);