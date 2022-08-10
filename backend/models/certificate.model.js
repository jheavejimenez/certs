const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    course: {type: String, required: true}
}, {
    timestamps: true,
})
const Certificate = mongoose.model('Certificate', certificateSchema)
module.exports = Certificate
