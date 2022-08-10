const router = require('express').Router();

let Certificate = require('../models/certificate.model');

router.route('/').get(async (req, res) => {

}).post((req, res) => {
    const certificate = req.body;

    const newCertificate = new Certificate({certificate});

    newCertificate.save()
        .then(() => res.json(newCertificate))
        .catch(err => res.status(400).json('Error: ' + err));
});
