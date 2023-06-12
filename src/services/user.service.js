const { User } = require('../models');

const userRegister = async (user) => {
    const { displayName, email, password, image } = user;
    const userRegistered = await User.create({ displayName, email, password, image });
    return userRegistered;
};

const getUsers = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};
const getUserById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
    });
    return user;
};
module.exports = {
    userRegister,
    getUsers,
    getUserById,
};