const mongoose = require('mongoose')
const validator = require('validator')

const schema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate(value) {
                if(!validator.isEmail(value)) throw new Error('Invalid email')
            },
            trim: true,
            lowercase: true
        },
        phone: {
            type: String,
            required: true,
        }
    }
)

const User = mongoose.model('User', schema)

module.exports = User