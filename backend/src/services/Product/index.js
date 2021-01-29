const Product = require("../../models/Product");

const getAllProduct = async () => {
    const data = await Product.find({});
    console.log(data)
    return data;
}


const getProductById = async (id) => {
    const data = await Product.findById(id);
    console.log(data)
    return data;
}
module.exports = {
    getAllProduct,
    getProductById
}