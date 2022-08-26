const router = require('express').Router();
let Certificate = require('../models/certificate.model');
const axios = require("axios");
const server = {
    affinidi: "https://cloud-wallet-api.prod.affinity-project.org/api/v1",
}

router.route('/:id').get(async (req, res) => {
  // find all certificates with user id
    const certificates = await Certificate.find({user: req.params.id});
    console.log(certificates);
    res.json(certificates);
}).post((req, res) => {
    const newCertificate = new Certificate(req.body);

    newCertificate.save()
        .then(() => res.json(newCertificate))
        .catch(err => res.status(500).json(`error ${err}`));
});

const login = async () => {
    const login = await axios.post(`${server.affinidi}/users/login`, {
        username: process.env.USERNAME,
        password: process.env.PASSWORD

    }, {
        headers: {"Content-Type": "application/json", "Api-Key": process.env.REACT_APP_API_KEY_HASH}
    })
    return login.data.accessToken
}

const signVc = async (accessToken, data) => {
    const sign = await axios.post(`${server.affinidi}/wallet/sign-credential`,{"unsignedCredential": data}, {
        headers: {
            "Content-Type": "application/json",
            "Api-Key": process.env.REACT_APP_API_KEY_HASH,
            "Authorization": `Bearer ${accessToken}`
        }
    })
    return sign.data.signedCredential.id
}

router.route('/:id').put(async (req, res) => {
    try {
        const {firstName, lastName, email, course, isApprove, unsignedCredentials} = req.body;
        const accessToken = await login()
        const claimId = await signVc(accessToken, unsignedCredentials)

        const update = {firstName, lastName, email, course, isApprove, claimId};
        const updatedCertificate = await Certificate.findByIdAndUpdate(req.params.id, update, {new: true});
        res.json(updatedCertificate)
    } catch (err) {
        console.log(err);
        res.status(500).json(`error ${err}`)
    }
})

module.exports = router;
