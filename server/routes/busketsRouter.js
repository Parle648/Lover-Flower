const Router = require('express');
const router = new Router();
const busketController = require('../controllers/busketController');

router.post('/', busketController.setBusket);

module.exports = router;