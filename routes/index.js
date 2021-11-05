// only one instance is created and it will pass exisiting instance 

const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("router loaded");

router.get('/', homeController.home);

// export router to be available to index.js
module.exports = router;