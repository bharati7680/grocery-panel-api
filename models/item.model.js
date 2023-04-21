const mongoose = require('mongoose')


const itemSchema = new mongoose.Schema({
    category_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
},{
    collation: { locale: 'en_US', strength: 1},
    usePushEach: true,
    timestamps: {createdAt: 'create_at', updatedAt: 'update_at'}
});

const Item = mongoose.model('Item', itemSchema)

module.exports = Item ;