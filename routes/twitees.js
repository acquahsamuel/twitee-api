const express = require('express');
const Twitee = require('../models/Twitee');
const { protect, authorize } = require('../utils/auth');
const advancedResults = require('../utils/advancedResults');

const {
  getTwitees,
  getTwitee,
  createTwitee,
  updateTwitee,
  deleteTwitee,
} = require('../controllers/twitees');

const router = express.Router();

router.route('/').get(advancedResults(Twitee), getTwitees).post(createTwitee);

router.route('/:id').get(getTwitee).put(updateTwitee).delete(deleteTwitee);

module.exports = router;
