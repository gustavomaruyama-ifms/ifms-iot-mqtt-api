const User = require('../model/User');

module.exports = async (page, quantityPerPage) => {
    const users = await User
        .find()
        .limit(quantityPerPage)
        .skip(quantityPerPage * page)
        .select('-password')
        .sort({
            name: 'asc'
        });
    return users;
};
