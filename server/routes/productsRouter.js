const Router = require('express');
const router = new Router();
const productController = require('../controllers/productController');

router.post('/', productController.setProduct);
router.get('/', productController.getProducts);
router.get('/getproduct/:id', productController.getProduct);
router.get('/:string', productController.getProductByString);
router.post('/currentProducts', productController.getCurrentProducts);

module.exports = router;