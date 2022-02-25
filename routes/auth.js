const express = require('express');
const { register, login, logout, getMe } = require('../controllers/auth');

const router = express.Router();
const { protect } = require('../utils/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', protect, getMe);

module.exports = router;
