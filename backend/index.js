const express = require("express");
const connectdb = require("./config/connectdb");
const ClientRoutes = require("./routes/clients");
const ProductRoutes = require("./routes/product");
const path = require("path");
// const Port=()
require("dotenv").config();
const app = express();
connectdb();

app.use(express.json());
app.use("/api/client", ClientRoutes);
app.use("/api/products", ProductRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(process.env.port, () =>
  console.log(`port is running on port ${process.env.port}`)
);
