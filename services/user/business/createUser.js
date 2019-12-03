const bcrypt = require('bcryptjs');
const User = require('../model/User');

module.exports = async (data) => {
    let user = await User.findOne({email: data.email});

    if (user) {
        throw [{msg: "Usuário já registrado."}];
    }

    user = new User(data);
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password,salt);
    user.save();
};
