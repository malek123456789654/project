const ClientSchema = require("../models/client");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.AddClient = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    let found = await ClientSchema.findOne({ email });
    if (found) {
      return res.status(400).send("user already exists");
    }
    let client = new ClientSchema({ name, email, password });
    const salt = 10;
    const hashpassword = bcrypt.hashSync(password, salt);
    client.password = hashpassword;
    await client.save();
    const payload = { id: client._id };
    const token = jwt.sign(payload, process.env.secretOrKey);

    res.status(200).send({ msg: "client is added", client, token });
  } catch (error) {
    res.status(500).send(error);
  }
};
exports.loginClient = async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundClient = await ClientSchema.findOne({ email });
    if (!foundClient) {
      return res.status(400).send({ msg: "bad credentials" });
    }
    // console.log(foundClient);

    const match = await bcrypt.compare(password, foundClient.password);
    console.log(match);

    if (!match) {
      return res.status(400).send({ msg: "bad credentials" });
    }
    const payload = { id: foundClient._id };
    const token = jwt.sign(payload, process.env.secretOrKey);
    return res.status(200).json({
      msg: "client logged succ",
      clientLogin: foundClient,
      token,
    });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not login" }] });
  }
};

exports.getClient = async (req, res) => {
  try {
    const clients = await ClientSchema.find();

    res.status(200).send({ msg: "client is added" });
  } catch (error) {
    res.status(500).send({ errors: [{ msg: "could not get client" }] });
  }
};
exports.deleteClient = async (req, res) => {
  try {
    const client = await ClientSchema.findByIdAndDelete(req.params.id);

    res.status(200).send({ msg: "client is deleted" });
  } catch (error) {
    res.status(500).send({ msg: "could not delete client" });
  }
};
exports.updateClient = async (req, res) => {
  try {
    const client = await commandeSchema.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });

    res.status(200).send({ msg: "client is updated" });
  } catch (error) {
    res.status(500).send({ msg: "could not updat client" });
  }
};
