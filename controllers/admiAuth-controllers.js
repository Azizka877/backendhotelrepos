
const authAdmi = require('../models/authAdmiSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

SECRET_KEY = process.env.SECRET_KEY;

//Inscription des Admis avec un controller
const registerAdmi = async(req, res) => {
  try {
    const { password, name,  email } = req.body;
    const hashpassword= await bcrypt.hash(password, 10)
    const newAdmi =  new authAdmi({
      password:hashpassword,
      name,
     email
    });
    await newAdmi.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.log('Error during registration:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
//Recuperation des Admis avec un controller
// const getAdmi = async(req, res, next) =>{
//     try {
//         const admi = await authAdmi.find();
        
//     res.status(201).json(admi);
// } catch (error) {
//   console.error('Error during getting admi:', error);
//   res.status(500).json({ error: 'Internal Server Error' });
// }
// }

// connection 

const loginAdmi = async(req, res) => {
   try {
    const {email,  password } = req.body;
    const admi = await authAdmi.findOne({email})
    if(!admi){
       return res.status(401).json({error:'Invalid Credentials',error})
    }
    const isPaswordValid = await bcrypt.compare(password, admi.password)
    if(!isPaswordValid){
       return res.status(401).json({error:'Invalid password'})   
   } 
   const tocken = jwt.sign({admiId : admi._id}, SECRET_KEY ,{expiresIn: '1hr'})
   res.json({message: "login successfully"})
}catch (error) {
    res.status(500).json({message: "login failed"})
   } 
   
  }

  


module.exports = { registerAdmi, loginAdmi };
