const productSchema = require("../models/products");
// exports.AddProduct = async (req, res) => {
//   const { name, prix, description, imageUrl, countInStock } = req.body;
//   try {
//     const product = new productSchema({ ...req.body, ClientId: req.client.id });
//     const found = await productSchema.findOne({ name });

//     await product.save();

//     res.status(200).send({ msg: "product is added", product });
//   } catch (error) {
//     res.status(500).send("could not add product");
//   }
//   if (prix < 0) {
//     res.status(400);
//     return res.send("Please add price");
//   }
//   if (countInStock < 0) {
//     res.status(400);
//     return res.send("Stock count should be positive ");
//   }
//   const product = new productSchema({ ...req.body, client: req.client._id });
//   const createdProduct = await product.save();

//   if (createdProduct) {
//     return res.status(200).send("Product Created");
//   }
//   return res.status(500).send("Error in Creating Product");
// };
exports.AddProduct = async (req, res) => {
  try {
    const product = new productSchema({ ...req.body, ClientId: req.client.id });
    await product.save();
    res.status(200).send({ msg: "product added", product });
  } catch (error) {
    res.status(500).send({ msg: "could not add" });
  }
};
// exports.getProduct = async (req, res) => {
//   try {
//     const allproducts = await productSchema.find().populate("ClientId");

//     res.status(200).send({ msg: "product is found", allproducts });
//   } catch (error) {
//     res.status(500).send({ msg: "could not get product" });
//   }
// };
exports.GetProduct = async (req, res) => {
  try {
    const allproducts = await productSchema.find().populate("ClientId");
    res.status(200).send({ msg: "our products", allproducts });
  } catch (error) {
    res.status(500).send({ msg: "could not get products" });
  }
};
exports.MyProduct = async (req, res) => {
  try {
    const products = await productSchema.findById();

    res.status(200).send({ msg: "product is found", products });
  } catch (error) {
    res.status(500).send({ msg: "could not get product" });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const products = await productSchema.findByIdAndDelete(req.params.id);

    res.status(200).send({ msg: "product is deleted", products });
  } catch (error) {
    res.status(500).send({ msg: "could not delete product" });
  }
};
exports.updateProduct = async (req, res) => {
  const productId = req.params.id;
  const product = await productSchema.findById(productId);
  if (product) {
    product.name = req.body.name;

    product.prix = req.body.prix;

    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res.send("Product Updated!");
    }
  }
  return res.status(500).send(" Error in Updating Product!");
};
