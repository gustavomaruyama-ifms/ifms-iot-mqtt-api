const express = require('express');
const createGroup = require('../business/createGroup');

const router = express.Router();

//@route    POST group
//@desc     Create a new Group
//@access   Public
router.post('/', async (request, response) => {
        try {
            await createGroup(request.user, request.body);
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
