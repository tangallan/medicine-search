'use strict';
const MedicineShopModel = require('../../models/medicalshop'),
    MedicineModel = require('../../models/medicine'),
    BloodbankModel = require('../../models/bloodbank');

const searchMedicines = (req, res) => {
    const theQueryParams = {
        ...req.query
    };
    let searchObj = {};

    if (theQueryParams.search) {
        searchObj.$text = {
            $search: theQueryParams.search
        };
    }

    if(theQueryParams.sno) {
        searchObj.sno = theQueryParams.sno;
    }

    MedicineModel.find(searchObj, (err, medicines) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.json(medicines);
        }
    });
};

const medicineShopForMeds = (req, res) => {
    const bodyData = { ...req.body };

    MedicineShopModel.find({
        "medicines.medicineSno": {
            $in: bodyData.medicineSnos
        }
    }, (err, medicineShops) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(medicineShops);
        }
    });
};

module.exports = {
    searchMedicines: searchMedicines,
    medicineShopForMeds: medicineShopForMeds
};