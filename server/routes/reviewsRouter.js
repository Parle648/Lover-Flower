const Router = require('express');
const router = new Router();
const postReviewController = require('../controllers/postReviewController');

router.post('/', postReviewController.createReview);
router.get('/', postReviewController.getReview);

module.exports = router;