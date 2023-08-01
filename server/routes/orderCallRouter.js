const Router = require('express');
const router = new Router();
const orderCallController = require('../controllers/orderCallController.js');

router.post('/', orderCallController.setCall);

module.exports = router;