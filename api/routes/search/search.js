const express = require('express'),
    router = express.Router();
const searchController = require('../../controllers/search');

router
    .route('/')
    .get(searchController.searchMedicines);

router
    .route('/medicineShops')
    .post(searchController.medicineShopForMeds);

module.exports = router;