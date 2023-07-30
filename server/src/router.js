const router = require('express').Router();
const authController = require('./controllers/authController');
const appController = require('./controllers/appController');

router.use('/users', authController);
router.use('/data', appController);

module.exports = router;