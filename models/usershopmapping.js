const Joi = require('joi');
const mongoose = require('mongoose');
 
const UserShopmap = mongoose.model('UserShopmap', new mongoose.Schema({
    userid: {
        type: ObjectId,
        required: true,
    },
    shopid: {
        type: ObjectId,
        required: true,
        unique: true
    },
}));
 
exports.UserShopmap = UserShopmap;