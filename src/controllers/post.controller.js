const { postServices } = require('../services');

const registryPost = async (req, res) => {
  try {
    const { body, user } = req;
    const response = await postServices.registryPost(body, user);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registryPost,
};
