const {
    productService
} = require('../../services')

const getAllProduct = async (req, res) => {
    try {
        const data = await productService.getAllProduct();
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}

const getProductById = async (req, res) => {
    try {
        const data = await productService.getProductById(req.params.id)
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Internal Server Error'
        })
    }
}
module.exports = {
    getAllProduct,
    getProductById
};