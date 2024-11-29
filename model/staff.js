let dbConnect = require('../config.js')
let mongoose = require('mongoose')

let staffSchema = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            },
            role: {
                type: String ,
                required: true
            },
            contact: {
                type: Number ,
                required: true
            },
            address: {
                type: String ,
                required: true
            }
})

module.exports = new mongoose.model('staff',staffSchema)