const mongoose = require('mongoose');
const multer = require('multer');
const img = require('./imgs')

const ImageSchema = mongoose.Schema({
    barber: String,
    street: String,
    number: String,
    name: String,
    id: String,
})

module.exports = mongoose.model('ImageSchema', ImageSchema)