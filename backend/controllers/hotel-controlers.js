const Hotel = require('../models/hotelSchema')




const getAllHotels = async (req,res,next)=>{
    let hotels;
    try {
        hotels= await hotels.find()
    } catch (err) {
        console.log(err);
    }
    if(!hotels){
        return res.status(404).json({
            message: 'No hotels found'
        })
    }
    return res.status(200).json({hotels})

};

const getHotelByid=async(req,res,next)=>{
    const id = req.params.id;
    let hotel;
    try {
        hotel = await Hotel.findById(id)
    } catch (err) {
        console.log(err);
    }
    if(!hotel){
        return res.status(404).json({
            message: 'No hotel found'
        })
    }
}

const addHotel = async(req,res,next)=>{
    
    let hotel;
    const {name, email,phoneNumber,price, profileImage}= re.body;
    try {
        hotel = new Hotel({name, email, phoneNumber, price, profileImage
        });
        await hotel.save()
    } catch (err) {
        console.log(err);
    }
    if(!hotel){
        return res.status(404).json({
            message: 'hotel is not added to the DB'
        })
    }
    return res.status(200).json({hotel})

}

const deleteHotel= async(req, res, next) =>{
    const id = req.params.id;
    let hotel;
    try {
        hotel = await Hotel.findByIdAndDelete(id)
    } catch (err) {
        console.log(err);
    }
    if(!hotel){
        return res.status(404).json({
            message: 'hotel not deleted'
        })       
    }
    return res.status(200).json({message: 'hotel is not deleted'});

};

const updatehotel = async(re,res,next)=>{
    const id = req.params.id;
    let hotel;
    const {name, email,phoneNumber,price, profileImage}= re.body;
    try {
        hotel = await Hotel.findByIdAndUpdate(id, 
            {name, email, phoneNumber,
             price, profileImage
        });
        hotel = await hotel.save();
    } catch (err) {
        console.log(err);
    }
    if(!hotel){
        return res.status(404).json({
            message: 'unable to update profie'
        })
    }
    return res.status(200).json({hotel})
}

exports.getAllHotels=getAllHotels;
exports.getHotelByid = getHotelByid;
exports.addHotel=addHotel;
exports.deleteHotel= deleteHotel;
exports.updatehotel = updatehotel;