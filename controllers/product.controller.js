const Product = require("../models/product.model");


const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getSpecProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const addProducts = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product)
      return res.status(404).json({ message: "this product doesn't exists!" });

    res.status(200).json({ message: "this product is deleted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product)
      return res.status(404).json({ message: product + " can't find!" });
   
    res
      .status(200)
      .json({ message:"This Product is Updated Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAllProducts,
  getSpecProduct,
  addProducts,
  deleteProducts,
  updateProducts,
};
