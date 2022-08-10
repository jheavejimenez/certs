const router = require('express').Router();

let Certificate = require('../models/certificate.model');

router.route('/').get(async (req, res) => {
    try {
        const searchQuery = req.query.q
        const filter = searchQuery ? {
            firstName: {$regex: `${searchQuery}`, $options: 'i'},
        } : {};
        const data = await Certificate.find(filter);
        res.json(data)

    } catch (err) {
        res.status(500).json(`error ${err}`)
    }

}).post((req, res) => {
    const newCertificate = new Certificate(req.body);

    newCertificate.save()
        .then(() => res.json(newCertificate))
        .catch(err => res.status(500).json(`error ${err}`));
});

module.exports = router;
