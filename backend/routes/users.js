const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get(async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);

    } catch(err) {
        res.status(400).json('error')

    }
}).post((req, res) => {
    const newUser = new User(req.body);

    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.status(500).json(`error ${err}`));
});

module.exports = router;
