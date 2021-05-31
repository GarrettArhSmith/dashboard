const mongoose = require('mongoose')
const Schema = mongoose.Schema

const updateSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    progressPoint: {
        type: Number,
        required: true
    },
    goalPoint: {
        type: Number,
        required: true
    },
    blockers: {
        type: String
    },
    notes: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Update", updateSchema)