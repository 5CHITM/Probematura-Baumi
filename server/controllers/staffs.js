const asyncHandler = require('express-async-handler');
const model = require('../models/staffs');

const getStaffs = asyncHandler(async (req, res) => {
  const staffs = await model.getStaffs();
  res.json(staffs);
});

const addStaff = asyncHandler(async (req, res) => {
  const newStaff = await model.addStaff(req.body);
  res.json(newStaff);
});

module.exports = { getStaffs, addStaff };
