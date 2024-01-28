const mongoose = require('mongoose');

const authAdmiSchema = new mongoose.Schema({
   password:{
    type: String,
    required: true
   },
  name: {
      type: String,
      required: true,
    },
    email:{
        type:String,
        required:true
    }
   
})

module.exports = mongoose.model('authAdmi', authAdmiSchema);

