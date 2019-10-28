const { UserShopmap } = require('../models/usershopmapping');
const express = require('express');
const router = express.Router();
 
router.post('/submit', async (req, res) => {
    // First Validate The Request
    const { error } = validateuser(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
   usershop =new UserShopmap({
       userid: req.body.userid,
       shopid: req.body.shopid
   })
   await usershop.save();
   res.send(usershop); 
   // Check if this user already exisits
    // let user = await User.findOne({ phone: req.body.phone });
    // if (user) {
    //     return res.status(400).send('That user already exisits!');
    // } else {
    //     // Insert the new user if they do not exist yet
    //     user = new User({
    //         name: req.body.name,
    //         phone: req.body.phone
    //     });
    //     await user.save();
    //     res.send(user);
    // }
});
router.post('/receive', async (req, res) => {
 
   UserShopmap.remove({"userid" : ObjectId(req.body.userid),"shopid" : ObjectId(req.body.shopid)})
   // Check if this user already exisits
    // let user = await User.findOne({ phone: req.body.phone });
    // if (user) {
    //     return res.status(400).send('That user already exisits!');
    // } else {
    //     // Insert the new user if they do not exist yet
    //     user = new User({
    //         name: req.body.name,
    //         phone: req.body.phone
    //     });
    //     await user.save();
    //     res.send(user);
    // }
});
module.exports = router;
