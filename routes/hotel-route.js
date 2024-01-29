const hotelControler = require('../controllers/hotel-controlers')
const express = require('express');
const router = express.Router()


// router.get('/', hotelControler.getAllHotels)
router.post('/', hotelControler.addHotel);
// router.delete('/', hotelControler.deleteHotel);
// router.get('/:id', hotelControler.getHotelByid);
// router.put('/:id', hotelControler.updatehotel);
module.exports = router