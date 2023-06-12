const { userSchema } = require('../joi/shemas');

module.exports = (req, res, next) => {
    const { error } = userSchema.validate(req.body);

    if (error) {
        const { message } = error.details[0];
        return res.status(400).json({ message });
    }

    next();
};
