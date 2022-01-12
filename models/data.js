const mongoose = require('mongoose')


const dataSchema = mongoose.Schema({
    Identity: {
        type: String
    },
    Password: {
        type: String
    }
}, { timestamps: true } )

module.exports = mongoose.model('userData',dataSchema)