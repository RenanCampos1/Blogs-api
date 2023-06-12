const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const generateToken = (res) => {
    const payload = {
        email: res.email,
        id: res.id,
    };

    const token = jwt.sign(payload, secret);
    return token;
};

module.exports = {
    generateToken,
};
