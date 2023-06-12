const { Category } = require('../models');

const registryCategory = async (name) => {
  const registeredCategory = await Category.create({ name });

  return registeredCategory;
};

const getCategory = async () => {
    const categories = await Category.findAll();

    return categories;
};

module.exports = {
    registryCategory,
    getCategory,
};
