const { categorieSchema } = require('../joi/shemas');

module.exports = (req, res, next) => {
    const { name } = req.body;
    const { error } = categorieSchema.validate({ name });

    if (error) {
        return res.status(400).json({ message: error.message });
    }

    next();
};
