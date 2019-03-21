'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const BloodBankSchema = new Schema({
    sno: {
        type: Number,
        required: 'Serial Number is required'
    },
    userId: {
        type: String,
        required: 'User is required'
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    group: {
        type: String,
        required: 'Group is required'
    },
    stock: {
        type: Number,
        required: 'Stock is required'
    }
});

module.exports = mongoose.model('bloodbanks', BloodBankSchema);