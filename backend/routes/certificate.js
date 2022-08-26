const router = require('express').Router();
let Certificate = require('../models/certificate.model');

router.get('/', async (req, res) => {
    const certificates = await Certificate.find({isApprove: true})
    res.json(certificates)
})

router.route('/:id').get(async (req, res) => {
    const certificates = await Certificate.find({user: req.params.id});
    res.json(certificates);
}).post((req, res) => {
    const newCertificate = new Certificate(req.body);

    newCertificate.save()
        .then(() => res.json(newCertificate))
        .catch(err => res.status(500).json(`error ${err}`));
});

module.exports = router;
