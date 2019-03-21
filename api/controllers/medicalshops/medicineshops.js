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
    MedicineShopModel.findById(req.params.id, (err, medicineShop) => {
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

const addMedicine_ToShop = (req, res) => {
    const dataToSave = {
        ...req.body
    };

    MedicineShopModel.findOne({
        _id: req.params.id,
        "medicines.medicineSno": dataToSave.medicineSno
    }, (err, medicineShop) => {
        if (err) {
            res.status(400).json(err);
        } else {
            if (medicineShop) {
                res.status(400).json({
                    message: 'Medicine Sno already exists for this shop.'
                });
            } else {
                console.log('can added medicine for shop', dataToSave);
                MedicineShopModel.findByIdAndUpdate(req.params.id, {
                    $addToSet: {
                        medicines: req.body
                    }
                }, (err, medicineShop) => {
                    if (err) {
                        res.status(400).json(err);
                    } else {
                        res.json(medicineShop);
                    }
                });
            }
        }
    });


};

const updateMedicineStock_ForShop = (req, res) => {
    const {
        medicineSno,
        stockCount
    } = req.body;
    MedicineShopModel.findOneAndUpdate({
            _id: req.params.id,
            "medicines.medicineSno": medicineSno
        }, {
            $set: {
                "medicines.$.stockCount": stockCount
            }
        },
        (err, medicineShop) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.json(medicineShop);
            }
        }
    );
};

const removeMedicine_FromShop = (req, res) => {
    MedicineShopModel.findByIdAndUpdate(req.params.id, {
        $pull: {
            medicines: {
                medicineSno: req.body.medicineSno
            }
        }
    }, (err, medicineShop) => {
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
    create_medicineShop: create_medicineShop,
    addMedicine_ToShop: addMedicine_ToShop,
    updateMedicineStock_ForShop: updateMedicineStock_ForShop,
    removeMedicine_FromShop: removeMedicine_FromShop,
};