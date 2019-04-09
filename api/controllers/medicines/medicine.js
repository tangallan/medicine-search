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

const addMedicineShop = (req, res) => {
    const dataToSave = {
        ...req.body
    };
    console.log(req.params.sno);
    console.log(dataToSave);

    MedicineModel.findOneAndUpdate({
        sno: req.params.sno
    }, {
        $addToSet: {
            "medicineShops": dataToSave
        }
    }, (err, medicine) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.json(medicine);
        }
    });
};

const removeMedicineShop = (req, res) => {
    const {
        medicineShopSno
    } = req.body;

    MedicineModel.findOneAndUpdate({
        sno: req.params.sno
    }, {
        $pull: {
            medicineShops: {
                medicineShopSno: medicineShopSno
            }
        }
    }, (err, medicine) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.json(medicine);
        }
    });
};

const updateQtyForMedicineShop = (req, res) => {
    const {
        medicineShopSno,
        stockQty
    } = req.body;

    MedicineModel.findOneAndUpdate({
        sno: req.params.sno,
        "medicineShops.medicineShopSno": medicineShopSno
    }, {
        $set: {
            "medicineShops.$.stockQty" : stockQty
        }
    }, (err, medicine) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.json(medicine);
        }
    })
};


module.exports = {
    getall_medicines: getall_medicines,
    get_medicine: get_medicine,
    create_medicine: create_medicine,
    addMedicineShop: addMedicineShop,
    removeMedicineShop: removeMedicineShop,
    updateQtyForMedicineShop: updateQtyForMedicineShop
};