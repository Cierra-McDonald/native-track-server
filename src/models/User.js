const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    //every email should be unique else there should be an error
    //if no email, not saved in the database
    email: { 
        type: String,
        unique: true,
        required: true
    },
    password: { 
        type: String,
        required: true
    }
})

mongoose.model('User', userSchema);