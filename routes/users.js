const express = require('express');
const User = require('../models/User');
const advancedResults = require('../utils/advancedResults');
const { protect, authorize } = require('../utils/auth');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

const router = express.Router({
  mergeParams: true,
});

router.use(protect);
router.use(authorize('admin'));

router.route('/').get(advancedResults(User), getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
