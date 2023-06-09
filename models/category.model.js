const mongoose = require('mongoose')


const categorySchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
},{
    collation: { locale: 'en_US', strength: 1},
    usePushEach: true,
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;