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
    address1: {
        type: String,
        required: 'Address is required'
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        required: 'City is required'
    },
    postalCode: {
        type: String,
        required: 'Postal Code is required'
    },
    stateProvince: {
        type: String,
        required: 'State is required'
    },
    country: {
        type: String,
        required: 'Country is required'
    },
    inventory: [{
        group: {
            type: String,
            required: 'Group is required'
        },
        stock: {
            type: Number,
            required: 'Stock is required'
        }
    }]
});

module.exports = mongoose.model('bloodbanks', BloodBankSchema);