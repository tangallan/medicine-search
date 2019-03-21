'use strict';
const MedicineModel = require('../../models/medicine');

const getall_medicines = (req, res) => {
    MedicineModel.find({}, (err, meds) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(meds);
        }
    });
};

const get_medicine = (req, res) => {
    MedicineModel.find({ sno: req.params.id }, (err, meds) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(meds[0]);
        }
    });
}

const create_medicine = (req, res) => {
    const new_medicine = new MedicineModel(req.body);

    new_medicine.save((err, medicine) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.json(medicine);
        }
    });
};



module.exports = {
    getall_medicines: getall_medicines,
    get_medicine: get_medicine,
    create_medicine: create_medicine
};