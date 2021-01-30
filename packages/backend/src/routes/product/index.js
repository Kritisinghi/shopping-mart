const express= require('express');
const router= express.Router();
const {getAllProduct,getProductById}=require("./get")

router.get('/',getAllProduct);

router.get('/:id',getProductById)


module.exports= router;