// import userSchema from './user'
// const mongoose = require('mongoose')
// const Schema = mongoose.Schema

// const studentSchema = new Schema({
//     user: userSchema,
//     ta: {
//         type: Schema.Types.ObjectId,
//         ref: "User",
//         required: true
//     },
//     progressPoint: {
//         type: Number,
//         required: true
//     },
//     paymentMethod: {
//         type: String,
//         enum:[]
//     },
//     alumni: {
//         type: Boolean,
//         default: false,
//         required: true
//     },
//     startDate: {
//         type: Date,
//         required: true
//     }
// })

// module.exports = mongoose.model("Student", studentSchema)