const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    date_registre: {type: Date, required: true, default: Date.now},
    firt_name: {type: String, required: true},
    second_name: {type: String, required: false, default: ''},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    identification_card: {type: String, required: true},
},  { autoIndex: true}, { autoCreate: true},
    { collection: 'users'})

module.exports = mongoose.model('User', UserSchema)