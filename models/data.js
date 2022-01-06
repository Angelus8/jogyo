const mongoose = require('mongoose')


const dataSchema = mongoose.Schema({
    Identity: {
        type: String
    },
    Email:{
        type: String
    },
    Profession:{
        type: String
    },
    Telephone:{
        type: Number
    },
    Password: {
        type: String
    }
}, { timestamps: true } )

module.exports = mongoose.model('userData',dataSchema)