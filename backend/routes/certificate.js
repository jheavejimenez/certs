const router = require('express').Router();

let Certificate = require('../models/certificate.model');
const axios = require("axios");

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

const login = async() => {
    const login = await axios.post(`/users/login`, {
        username: process.env.USERNAME,
        password: process.env.PASSWORD

    }, {
        headers: { contentType: "application/json", "Api-Key": process.env.API_KEY }
    })
    return login.data.accessToken
}

const signVc = async(accessToken, data) => {
    const sign = await axios.post("wallet/sign-credential", data, {
        headers: { contentType: "application/json", "Api-Key": process.env.API_KEY, "Authorization": `Bearer ${accessToken}` }
    })
    return sign.data
}

router.route('/:id').put(async (req, res) => {
    try {
        const {firstName, lastName, course, isApprove, unsignedCredential} = req.body;
        const update = {firstName, lastName, course, isApprove, claimId: response.data.signedCredential.id};
        const userCertificate = Certificate.findByIdAndUpdate(req.params.id, update, {new: true});
        res.json(userCertificate)
    } catch (err) {
        console.log(err);
        res.status(500).json(`error ${err}`)
    }
})

module.exports = router;
