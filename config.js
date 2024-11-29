let mongoose = require('mongoose')
let database = 'restaurant '
mongoose.connect('mongodb://127.0.0.1:27017/restaurant')
    .then(() => {
        console.log('Connect mongoose Successfully...');
    }).catch(() => {
        console.log('Connect mongoose Failed...');
    })

// let ironManSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     characterName: {
//         type: String,
//         required: true
//     },
//     movies: {
//         type: Number,
//         required: true
//     },
// })

// let createModel = async () => {
//     let ironMan = mongoose.model('Ironman', ironManSchema)
//     let data = new ironMan({
//         name: 'Tony Stark',
//         characterName: 'RDJ',
//         movies: 23
//     })
//     let result = await data.save()
//     console.log(result);
// }

// createModel()


// let findData = async () => {
//     let ironMan = mongoose.model('Ironman', ironManSchema)
//     let data = await ironMan.find()
//     console.log(data);
// }

// findData()

// let deleteData = async () => {
//     let ironMan = mongoose.model('Ironman', ironManSchema)
//     let data = await ironMan.deleteOne({ _id: '67475ec013705113898b309e' })
//     console.log(data);
// }

// deleteData()

// let updateData = async () => {
//     let ironMan = mongoose.model('Ironman', ironManSchema)
//     let data = await ironMan.findByIdAndUpdate(
//         { _id: '67475ec013705113898b309e' },
//         {
//             $set: {
//                 name: 'RDJ 2',
//                 characterName: 'Dr Doom',
//                 movies: 1
//             }
//         }
//     )
//     let result = await data.save()
//     console.log(data);
// }

// updateData()s