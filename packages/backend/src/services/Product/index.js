const Product = require("../../models/Product");

const getAllProduct = async () => {
    const data = await Product.find({});
    return data;
}


const getProductById = async (id) => {
    const data = await Product.findById(id);
    return data;
}
module.exports = {
    getAllProduct,
    getProductById
}