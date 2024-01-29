const express = require('express'); 
const cors = require('cors');
const routes = require('./routes/hotel-route')
const Admirouter = require('./routes/admiAuth-routes')
const mongoose = require('mongoose');
require('dotenv').config();


const APP = express();
APP.use(cors());
APP.use(express.json());

const MONGODB_URI= process.env.MONGODB_URI;
const PORT = process.env.PORT || 8000;


mongoose.connect(MONGODB_URI)
     .then(() => {
        console.log('Connected to MongoDB');
        APP.listen(PORT, () => {
            console.log('Server is running to db on port ',PORT);
        });
        
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });
APP.get("/",(req,res)=>{
    res.send("Hello World data")
})
APP.use('/hotels', routes);
APP.use('/api/admin', Admirouter); 

// file uploading
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null,'public/images');
//     },
//     filename: function (req, file, cb) {
//         cb(null, `${Date.now()}_${file.originalname}`)
//     }

// })
// const upload = multer({
//     storage: storage,
    
// })


// APP.listen(PORT, ()=>{
//     console.log('connected in Db');
// })