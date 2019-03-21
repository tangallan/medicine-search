const express = require('express'),
    router = express.Router();
const medicineShopsController = require('../../controllers/medicalshops/medicineshops');

router.
    route('/:id')
    .get(medicineShopsController.get_medicineShop);

router.
    route('/')
    .get(medicineShopsController.getall_medicineShops);

router.
    route('/')
    .post(medicineShopsController.create_medicineShop);

router.
    route('/:id/addMedicine')
    .put(medicineShopsController.addMedicine_ToShop);

router.
    route('/:id/removeMedicine')
    .delete(medicineShopsController.removeMedicine_FromShop);

router.
    route('/:id/updateMedicineStock')
    .put(medicineShopsController.updateMedicineStock_ForShop);

module.exports = router;