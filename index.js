const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/users');
const express = require('express');
const app = express();
 
mongoose.connect('mongodb://kachu:Shubham1234@ds121311.mlab.com:21311/trip_planner')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
app.use(express.json());
app.use('/api/users', users);
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
