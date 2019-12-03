const express = require('express');
const authenticator = require("../../../middlewares/servicesAuthenticator");
const findUserById = require('../business/findUserById');
const router = express.Router();

//@route    GET user
//@desc     Find a user by id
//@access   Public
router.get('/id/:id', authenticator, async (request, response) => {
    try {
        const user = await findUserById(request.params.id);
        if (!user) {
            return response
                .status(404)
                .send();
        }
        response
            .status(200)
            .json(user);
    } catch (errors) {
        console.log(errors);
        response
            .status(400)
            .send();
    }
});

module.exports = router;
