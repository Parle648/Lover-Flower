const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.post('/', productController.setProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProduct);

module.exports = router;