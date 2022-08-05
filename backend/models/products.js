const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,

  description: String,
  prix: Number,
  productId: Number,
  countInStock: {
    type: Number,
    required: true,
  },
  rating: { type: Number, default: 0 },
  ClientId: { type: mongoose.Schema.Types.ObjectId, ref: "client" },
});
module.exports = mongoose.model("product", productSchema);
