const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificateSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
    userEmail: {type: String, required: true},
    certificates:[{
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        course: {type: String, required: true},
        isApprove: {type: Boolean},
        claimId: {type: String}
    }]
}, {
    timestamps: true,
})
const Certificate = mongoose.model('Certificate', certificateSchema)
module.exports = Certificate
