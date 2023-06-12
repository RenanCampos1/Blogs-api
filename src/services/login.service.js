const { User } = require('../models');

const getUser = async (email, password) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        return { type: 'INVALID_VALUE', message: 'Invalid fields' };
    }

    return user.toJSON();
};

module.exports = {
    getUser,
};
