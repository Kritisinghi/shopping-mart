const router = require('express').Router();

const Product = require('./product');
const Login = require('./login');

router.use('/products', Product);
router.use('/login', Login);

module.exports = router;
