const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    price: { type: Number, required: true}
},  { autoIndex: true}, { autoCreate: true},
    { collection: 'items'})

module.exports = mongoose.model('Item', ItemSchema)
