const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../../services/user/model/User');

module.exports = async (data) => {
    let user = await User.findOne({email: data.email});

    if (!user) {
        throw [{msg: "E-mail ou senha inválidos."}];
    }

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!isMatch) {
        throw [{msg: "E-mail ou senha inválidos."}];
    }

    const payload = {
        user: {
            id: user.id
        }
    };

    const options = {
         expiresIn: 86400
    };

    const token = await jwt.sign(payload, config.get('jwtSecret'), options);

    return token;
};