const express = require('express');
const authenticator = require("../../../middlewares/servicesAuthenticator");
const listUsersByPage = require('../business/listUsersByPage');
const router = express.Router();

router.get('/page/:page/quantityPerPage/:quantityPerPage', authenticator, async (request, response) => {
    try {
        const page = new Number(request.params.page);
        const quantityPerPage = new Number(request.params.quantityPerPage);

        const users = await listUsersByPage(page, quantityPerPage);

        if (!users) {
            return response
                .status(404)
                .send();
        }

        response
            .status(200)
            .json(users);

    } catch (errors) {
        console.log(errors);
        response
            .status(400)
            .send();
    }
});

module.exports = router;
