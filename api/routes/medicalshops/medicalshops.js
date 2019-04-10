const express = require('express'),
    router = express.Router();
const medicineShopsController = require('../../controllers/medicalshops/medicineshops');

router.
    route('/:sno')
    .get(medicineShopsController.get_medicineShop);

router.
    route('/')
    .get(medicineShopsController.getall_medicineShops);

router.
    route('/')
    .post(medicineShopsController.create_medicineShop);

module.exports = router;