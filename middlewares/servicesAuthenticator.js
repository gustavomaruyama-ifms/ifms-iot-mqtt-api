const jwt = require('jsonwebtoken');
const config = require('config');
const findUserById = require('../services/user/business/findUserById');

module.exports = async (request, response, next) => {
    const token = request.header("x-auth-token");
    try {
        if (!token) {
            throw [{msg: "Acesso negado: ausência de token"}]
        }

        const decodedToken = await jwt.verify(token, config.get("jwtSecret"));

        request.user =  await findUserById(decodedToken.user.id);

        next();

    }catch(errors){
        console.log(errors);
        return response
            .status(401)
            .send();
    }
};
