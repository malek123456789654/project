const {
  AddClient,
  updateClient,
  deleteClient,
  loginClient,
} = require("../controlers/Clientcontrollers");

const express = require("express");
const { isAuth } = require("../middelwares/auth");
const { login, register, validation } = require("../middelwares/validation");

const ClientRoutes = express.Router();

ClientRoutes.post("/register", register, validation, AddClient);
ClientRoutes.post("/log", login, validation, loginClient);

ClientRoutes.get("/current", isAuth, (req, res) => {
  res.send({ client: req.user });
});

ClientRoutes.put("/:id", updateClient);
ClientRoutes.delete("/:id", deleteClient);

module.exports = ClientRoutes;
