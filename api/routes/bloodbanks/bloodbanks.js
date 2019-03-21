const express = require('express'),
    router = express.Router();
const bloodbanksController = require('../../controllers/bloodbanks/bloodbanks');

router.
    route('/:id')
    .get(bloodbanksController.get_bloobank);

router.
    route('/')
    .get(bloodbanksController.getall_bloobanks);

router.
    route('/')
    .post(bloodbanksController.create_bloodbank);    

module.exports = router;