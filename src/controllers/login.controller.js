const { loginServices } = require('../services');
const { generateToken } = require('../utils/token');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await loginServices.getUser(email, password);
    if (response.type) {
      return res.status(400).json({ message: response.message });
    }

    const token = generateToken(response);
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  userLogin,
};
