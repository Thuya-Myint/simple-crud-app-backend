const mongoose = require("mongoose");

//creating object 
const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name is required!"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: String,
      required: true,
      default: "",
    },
    image: {
      type: String,
      required: [true, "Please Insert Image"],
    },
  },
  {
    timestamps: true,
  }
);
// crating a collection including Product we created earlier
const Product=mongoose.model("Product",ProductSchema);
module.exports=Product;
