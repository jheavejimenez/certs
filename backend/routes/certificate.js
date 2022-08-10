const router = require('express').Router();

let Certificate = require('../models/certificate.model');

router.route('/').get(async (req, res) => {
    try {
        const searchQuery = req.query.q
        const filter = searchQuery ? {
            certificate: {$regex: `${searchQuery}`, $options: 'i'},
        } : {};
        const data = await Certificate.find(filter);
        res.json(data)

    } catch (err) {
        res.status(500).json(`error ${err}`)
    }

}).post(async (req, res) => {
    const certificate = req.body;
    console.log(certificate)

    const newCertificate = new Certificate({certificate});

    newCertificate.save()
        .then(() => res.json(newCertificate))
        .catch(err => res.status(500).json(`error ${err}`));
});

module.exports = router;
