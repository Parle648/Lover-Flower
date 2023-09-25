const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.post('/', productController.setProduct);
router.get('/', productController.getProducts);
router.get('/type/:string', productController.getSortedProducts);
router.post('/getSortedByDecreasing', productController.getSortedByDecreasing);
router.post('/getSortedByIncreasing', productController.getSortedByIncreasing);
router.get('/:id', productController.getProduct);

module.exports = router;