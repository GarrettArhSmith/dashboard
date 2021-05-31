// import studentSchema from './student'
// import taSchema from './ta'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const studentSchema = new Schema({
    ta: {
        type: Schema.Types.ObjectId,
        ref: "User",
        // required: true
    },
    progressPoint: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        enum:[]
    },
    alumni: {
        type: Boolean,
        default: false
    },
    startDate: {
        type: Date,
        // required: true
    }
})

const staffSchema = new Schema({

})

const adminSchema = new Schema({

})

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    roles: {
        type: [{
            type: String,
            enum: ["student", "ta"]
        }],
        required: true,
        validate: v => v.length > 0
    },
    studentProps: {
        type: studentSchema,
        validate: {
            validator: validateRole("student"),
            message: "Correct role not found!"
        }
    },
    staffProps: {
        type: staffSchema,
        validate: {
            validator: validateRole("staff"),
            message: "Correct role not found!"
        }
    },
    adminProps: {
        type: adminSchema,
        validate: {
            validator: validateRole("admin"),
            message: "Correct role not found!"
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

//DETERMINE IF USER HAS ROLE TO SET ROLE PROPS REQUIRED
function validateRole(role){
    return function(){
        return this.roles.includes(role)
    }
};

//PRE-SAVE HOOK TO ENCRYPT USER PASSWORD ON SIGN UP
userSchema.pre("save", function(next) {
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.hash(user.password, 10, (err, hash) => {
        if(err) return next(err)
        user.password = hash
        next()
    })
})

//METHOD TO CHECK ENCRYPTED PASSWORD ON LOGIN
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if(err) return callback(err)
        return callback(null, isMatch)
    })
}

//METHOD TO REMOVE USER'S PASSWORD FOR TOKEN/SENDING RESPONSE
userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model("User", userSchema)