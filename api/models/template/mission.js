const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MissionSchema = new Schema({  
   name: String,
   email: String,
   subject: String,
   message: String 
});

module.exports = mongoose.model("Mission", ContactSchema);