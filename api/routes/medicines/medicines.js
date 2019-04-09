const express = require('express'),
    router = express.Router();
const medicineController = require('../../controllers/medicines/medicine');

router
    .route('/:id')
    .get(medicineController.get_medicine);

router
    .route('/')
    .post(medicineController.create_medicine);

router.
    route('/:sno/addShop')
    .put(medicineController.addMedicineShop);

router.
    route('/:sno/removeShop')
    .delete(medicineController.removeMedicineShop);

router.
    route('/:sno/updateQty')
    .put(medicineController.updateQtyForMedicineShop);

router
    .route('/')
    .get(medicineController.getall_medicines);

module.exports = router;