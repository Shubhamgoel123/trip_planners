const Joi = require('joi');
const mongoose = require('mongoose');
 
const User = mongoose.model('User', new mongoose.Schema({
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
}));
 
function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(10).max(15).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
