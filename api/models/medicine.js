'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const MedicineSchema = new Schema({
    sno: {
        type: Number,
        required: 'Serial Number is required'
    },
    name: {
        type: String,
        required: 'Name is required'
    },
    dosage: {
        type: String,
        required: 'Dosage information is required'
    },
    pdate: {
        type: Date,
        default: Date.now
    },
    medicineShops: [
        {
            medicineShopSno: {
                type: Number,
                required: 'Medicine Shop Sno is required'
            },
            stockQty: {
                type: Number,
                required: 'Stocky Qty is required'
            }
        }
    ]
});

module.exports = mongoose.model('medicines', MedicineSchema);