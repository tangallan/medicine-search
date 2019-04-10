'use strict';
const MedicineShopModel = require('../../models/medicalshop');

const getall_medicineShops = (req, res) => {
    MedicineShopModel.find({}, (err, medicineShops) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(medicineShops);
        }
    });
};

const get_medicineShop = (req, res) => {
    MedicineShopModel.findOne({
        sno: req.params.sno
    }, (err, medicineShop) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(medicineShop);
        }
    });
};

const create_medicineShop = (req, res) => {
    const new_medicineShop = new MedicineShopModel(req.body);

    new_medicineShop.save((err, medicineShop) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(medicineShop);
        }
    });
};

module.exports = {
    getall_medicineShops: getall_medicineShops,
    get_medicineShop: get_medicineShop,
    create_medicineShop: create_medicineShop
};