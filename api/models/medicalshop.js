'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const MedicalShopSchema = new Schema({
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
    medicines: [
        {
            medicineSno: Number,
            stockCount: Number
        }
    ]
});

module.exports = mongoose.model('medicalshops', MedicalShopSchema);