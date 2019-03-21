const express = require('express'),
    router = express.Router();
const medicineController = require('../../controllers/medicines/medicine');

router
    .route('/:id')
    .get(medicineController.get_medicine);
    
router
    .route('/')
    .post(medicineController.create_medicine);

router
    .route('/')
    .get(medicineController.getall_medicines);

module.exports = router;