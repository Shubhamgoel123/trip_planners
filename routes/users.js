const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const { otpSender } = require('../authentication/otp_sender');
 
router.post('/register', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    const phone = req.body.phone
    // Check if this user already exisits
    let user = await User.findOne({ phone: phone });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            phone: phone
        });

        await user.save();
        res.send(user);

        otp = otpSender(phone);
        user.otp = otp;
        await user.save();
    }
});

router.post('/login', async (req, res) => { 
    const phone = req.body.phone
    // Check if this user already exisits
    let user = await User.findOne({ phone: phone });
    if (user) {
        // Insert the new user if they do not exist yet
        otp = otpSender(phone);
        res.send(user);
        user.otp = otp;
        await user.save();
    } else {
        return res.status(400).send('User Not Exists');
    }
});

router.post('/validate-otp', async (req, res) => { 
    const id = req.body.id

    // Check if this user already exisits
    let user = await User.findOne({ _id: id });
    if (user) {
        // Insert the new user if they do not exist yet
        if(user.otp) {
            if(user.otp == req.body.otp) {
                return res.status(200).send('Otp is Valid');
            } else {
                return res.status(400).send('Otp is Invalid');
            }
        } else {
            return res.status(400).send('Otp is Invalid');
        }
    } else {
        return res.status(400).send('User Not Exists');
    }
});

module.exports = router;
