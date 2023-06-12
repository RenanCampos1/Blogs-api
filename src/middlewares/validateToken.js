const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    try {
        const code = jwt.verify(authorization, secret);
        req.user = code;

        next();
    } catch (e) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
}; 