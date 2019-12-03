const authenticateUser = require('./authenticateUser');
const createUser  = require('./createUser');
const findUserById = require('./findUserById');
const listUserByPage = require('./listUsersByPage');

module.exports = [
    authenticateUser,
    createUser,
    findUserById,
    listUserByPage
]
