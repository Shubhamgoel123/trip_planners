const Joi = require('joi');
const mongoose = require('mongoose');
 
const Shopkeeper = mongoose.model('Shopkeeper', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        unique: true
    },
    shopname: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
        unique: true
    },
}));
 
function validateShopkeeper(shopkeeper) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(10).max(15).required(),
        shopname: Joi.string().min(10).max(15).required()
    };
    return Joi.validate(shopkeeper, schema);
}

exports.Shopkeeper = Shopkeeper;
exports.validate = validateShopkeeper;
