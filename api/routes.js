const Amplify = require('../controllers/amplifyProducts'); 
const Images = require('../controllers/images');
const SalePoints = require('../controllers/salePoints');
const Products = require('../controllers/products');
const Users = require('../controllers/user')
const { Router } = require('express');
const router = Router();

// // Products Routes
 router.get('/product/search/all', Products.findAllProd);
// router.get('/products/:id', Products.prodById);
// router.post('/products/add', Products.addProd);

// View Products, categories, salepoints 
router.get('/product/availability', Amplify.FindContentHome);

// // Sale Points Routes
// router.get('/salepoints/all', SalePoints.findAllSalePoints);
// router.get('/salepoints/:id',SalePoints.salePointById);
router.post('/salepoints/add', SalePoints.addSalePoint);

// //Categories Routes
// router.get('/categories/all', Categories.findAllCategories);
// router.post('/categories/add', Categories.addCategory);

router.post('/user/signup', Users.addUser);
router.post('/user/login', Users.validateUserLogin)

// //images
router.get('/src/images/:img', Images.imagesViewer);

module.exports = router;