const mongoose = require('mongoose')


const dataSchema = mongoose.Schema({
    Email: {
        type: String
    },
    Password: {
        type: String
    }
}, { timestamps: true } )

module.exports = mongoose.model('userData',dataSchema)