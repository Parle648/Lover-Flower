const Router = require('express');
const router = new Router();

const busketRouter = require('./busketsRouter');
const haveQuestions = require('./haveAQuestionsRouter');
const orderCall = require('./orderCallRouter');
const orderRouter = require('./ordersRouter');
const productRouter = require('./productsRouter');
const reviewsRouter = require('./reviewsRouter');

router.use('/products', productRouter);
router.use('/questions', haveQuestions);
router.use('/call', orderCall);
router.use('/busket', busketRouter);
router.use('/reviews', reviewsRouter);
router.use('/orders', orderRouter);

module.exports = router;