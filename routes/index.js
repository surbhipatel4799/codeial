// only one instance is created and it will pass exisiting instance 

const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log("router loaded");

router.get('/', homeController.home);
router.get('/contact', homeController.contact);

// for further routes
// router.use('/routerName', require('routerFile'));

router.use('/users', require('./users'));
// router.use('/likes', require('./likes'));
router.use('/posts', require('./posts'));

// export router to be available to index.js
module.exports = router;