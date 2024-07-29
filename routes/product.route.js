const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {
  getAllProducts,
  getSpecProduct,
  addProducts,
  deleteProducts,
  updateProducts,
} = require("../controllers/product.controller.js");

router.get("/", getAllProducts);
router.get("/:id", getSpecProduct);
router.post("/", addProducts);
router.delete("/:id", deleteProducts);
router.put("/:id", updateProducts);

module.exports = router;
