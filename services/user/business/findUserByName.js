const User = require('../model/User');

module.exports = async (name) => {
    const users = await User.find({name:name}).select('-password');
    return users;
};
