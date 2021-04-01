const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const customerSchema = new Schema({
  cid: String,
  cname: String,
  csurname: String,
  cage: Number,
  cgender: String
});

const customerModel = new model("Customer", customerSchema);

module.exports = {
  customerModel
};
