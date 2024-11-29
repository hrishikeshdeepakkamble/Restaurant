let dbConnect = require('../config.js')
let mongoose = require('mongoose')

let adminSchema = new mongoose.Schema({
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

let createadminData = async () =>{
    let createAdmin = new mongoose.model('Admin',adminSchema)
    let adminData = new createAdmin(
        {
            name: 'Anuj Shinde',
            email: 'anuj12@gamil.com',
            password: 'anuj@123gmail.com', 
            role: 'Admin',
            contact: 7447669326 ,
            address: 'Kolhapur'
        }
 
)
let data =  await adminData.save()
console.log(data)

}
createadminData()
module.exports = new mongoose.model('Admin',adminSchema)