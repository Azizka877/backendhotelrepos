const express = require("express")
const {registerAdmi, loginAdmi, getAdmi} = require("../controllers/admiAuth-controllers");

const router = express.Router();


router.post('/login', loginAdmi);//connection
router.post('/register', registerAdmi);//inscription
router.get('/register', getAdmi);//recuperation des admis


module.exports= router




