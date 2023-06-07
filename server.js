require('dotenv').config();
require('./config/database')

const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.set('strictQuery',false);

const PORT = process.env.PORT || 3001;
const userController = require('./routes/users');

//middleware
app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use((req,res,next) => {
    console.log('running on all routes');
    next();
})

app.use('/user', userController);




const launchApp = () => {
    try {

        //listen to port
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        })
    } catch(error)
    {
        console.log(error.message);
    }
}

launchApp();
