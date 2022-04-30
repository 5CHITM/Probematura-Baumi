const express = require('express');
const { getStaffs, addStaff } = require('../controllers/staffs');

const router = express.Router();

router.get('/staffs', getStaffs);
router.post('/staff', addStaff);

module.exports = router;
