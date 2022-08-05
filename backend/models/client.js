const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  name: String,
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, enum: ["admin", "Client"], default: "Client" },
});
module.exports = mongoose.model("client", clientSchema);
