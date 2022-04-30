const express = require('express');
const { getEstates, deleteEstate } = require('../controllers/estates');

const router = express.Router();

router.get('/estates', getEstates);
router.delete('/estate/:id', deleteEstate);

module.exports = router;
