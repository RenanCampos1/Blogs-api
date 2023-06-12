const { categoriesService } = require('../services');

const registryCategory = async (req, res) => {
  const { name } = req.body;

  const response = await categoriesService.registryCategory(name);
  return res.status(201).json(response);
};

const getCategory = async (_req, res) => {
    const response = await categoriesService.getCategory();

    return res.status(200).json(response);
};

module.exports = {
    registryCategory,
    getCategory,
};
