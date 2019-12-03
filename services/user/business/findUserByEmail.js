const User = require('../model/User');

module.exports = async (email) => {
    const users = await User.find({email:email}).select('-password');
    return users;
};
