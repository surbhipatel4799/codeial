const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likes_controller')

router.get('/add-like', likesController.like);

module.exports = router;