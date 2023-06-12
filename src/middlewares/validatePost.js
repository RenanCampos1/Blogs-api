const { postSchema } = require('../joi/shemas');

module.exports = async (req, res, next) => {
  const { body } = req;
  const { error } = await postSchema.validate(body);

  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};
