const {
  AddProduct,

  deleteProduct,
  updateProduct,
  MyProduct,
  GetProduct,
} = require("../controlers/productcontrolers");

const express = require("express");
const ProductRoutes = express.Router();

ProductRoutes.post("/addproduct", AddProduct);
ProductRoutes.get("/myproduct/:id", MyProduct);
ProductRoutes.get("/product", GetProduct);
ProductRoutes.put("/update/:id", updateProduct);
ProductRoutes.delete("/remove/:id", deleteProduct);

module.exports = ProductRoutes;
