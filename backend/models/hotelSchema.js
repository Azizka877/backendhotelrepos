const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
   password:{
    type: String,
    required: true
   },
  name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
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
      type: String, // Stock le chemin du fichier ou l'URL de l'image dans la base de données
    },
   
})

module.exports = mongoose.model('hotel', RegisterSchema);

