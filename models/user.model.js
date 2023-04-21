const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    LastName: {
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
    }
},{
    collation: { locale: 'en_US', strength: 1},
    usePushEach: true,
    timestamps: {createdAt: 'create_at', updatedAt: 'update_at'}
})

const User = mongoose.model('User', userSchema)

module.exports = User;