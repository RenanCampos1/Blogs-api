const { loginServices, userServices } = require('../services');
const { generateToken } = require('../utils/token');

const userRegister = async (req, res) => {
  const { body } = req;
  const userCheck = await loginServices.getUser(body.email, body.password);

  if (!userCheck.type) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const response = await userServices.userRegister(body);
  const token = generateToken(response);

  return res.status(201).json({ token });
};

const getUsers = async (_req, res) => {
  const users = await userServices.getUsers();

  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await userServices.getUserById(id);

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  userRegister,
  getUsers,
  getUserById,
};
