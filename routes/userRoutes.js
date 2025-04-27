const express = require('express');
const {signupUser, loginUser, getUserProfile} = require('../controllers/userControllers');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Route to handle user sign-up     
router.post('/signup', signupUser);
// Route to handle user login
router.post('/login', loginUser);
// Route to get user profile
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;