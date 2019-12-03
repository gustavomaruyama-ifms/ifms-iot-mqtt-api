const express = require('express');
const authenticateUser = require('../business/authenticateUser');
const {check, validationResult} = require('express-validator');

const router = express.Router();

//@route    POST authentication
//@desc     Servico para autenticacao de usuario por e-mail e senha
//@access   Public
router.post('/authenticate', [
        check('email',
            'Insira um email válido.')
            .isEmail(),
        check(
            'password',
            'Senha é obrigatória.')
    ], async (request, response) => {
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                throw errors.array();
            }
            const token = await authenticateUser(request.body);
            response
                .status(200)
                .json({token: token});
        } catch (errors) {
            console.log(errors);
            response
                .status(400)
                .json(errors);
        }
    }
);

module.exports = router;
