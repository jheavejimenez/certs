const router = require('express').Router();
let Certificate = require('../models/certificate.model');
const axios = require("axios");
const {affinidi} = require("../utils/apiConfig");
const {mongoose} = require('mongoose');


const confirmSignUp = async (data) => {
    const otp = await axios.post("https://cloud-wallet-api.prod.affinity-project.org/api/v1/users/sign-in-passwordless/confirm",
        {
            "token": data.token,
            "confirmationCode": data.confirmationCode
        }, {
            headers: {
                "Content-Type": "application/json",
                "Api-Key": process.env.REACT_APP_API_KEY_HASH
            }
        })
    return otp.data.did;

}

router.route('/').get(async (req, res) => {
    const certificates = await Certificate.find({isApprove: true})
    res.json(certificates)
}).post(async (req, res) => {
    const newCertificate = new Certificate(req.body);
    newCertificate.save()
        .then(() => res.json(newCertificate))
        .catch(err => res.status(500).json(`error ${err}`));
});

router.route('/dashboard/:id').get(async (req, res) => {
    const certificates = await Certificate.find({user: req.params.id});
    res.json(certificates);
})
router.route('/e').post(async (req, res) => {
    const update = await confirmSignUp(req.body)
    console.log(update)
    return res.json(update)

})

module.exports = router;
