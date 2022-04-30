const asyncHandler = require('express-async-handler');
const model = require('../models/estates');

const getEstates = asyncHandler(async (req, res) => {
  const estates = await model.getEstates();
  res.json(estates);
});

const deleteEstate = asyncHandler(async (req, res) => {
  const estate = await model.deleteEstate();
  res.json(estate);
});

module.exports = { getEstates, deleteEstate };
