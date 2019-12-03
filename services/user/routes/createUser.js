const express = require('express');
const createUser = require('../business/createUser');

const router = express.Router();

//@route    POST user
//@desc     Create a new user
//@access   Public
router.post('/', async (request, response) => {
        try {
            await createUser(request.body);
            response
                .status(200)
                .send();
        } catch (errors) {
            console.log(errors);
            response
                .status(400)
                .json({errors: errors});
        }
    }
);

module.exports = router;
