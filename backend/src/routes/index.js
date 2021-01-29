const router= require('express').Router();

const Product = require('./product');

router.use('/products',Product)

module.exports= router;