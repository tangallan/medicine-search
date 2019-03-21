'use strict';
const BloodBankModel = require('../../models/bloodbank');

const getall_bloobanks = (req, res) => {
    BloodBankModel.find({}, (err, bloobanks) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.json(bloobanks);
        }
    });
};

const get_bloobank = (req, res) => {
    BloodBankModel.find({ sno: req.params.id }, (err, bloobanks) => {
        if(err) {
            res.status(400).json(err);
        } else {
            res.json(bloobanks[0]);
        }
    });
};

const create_bloodbank = (req, res) => {
    const new_bloodbank = new BloodBankModel(req.body);

    new_bloodbank.save((err, newbloobank) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(newbloobank);
        }
    });
};

module.exports = {
    getall_bloobanks: getall_bloobanks,
    get_bloobank: get_bloobank,
    create_bloodbank: create_bloodbank,
};
