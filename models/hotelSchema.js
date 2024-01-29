const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  
  name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    profileImage: {
      type: String, 
    },
   
},{timestamps: true})

module.exports = mongoose.model('Données', DataSchema);

