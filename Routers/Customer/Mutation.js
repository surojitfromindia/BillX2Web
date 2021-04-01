const express = require("express");
const router = express.Router();
const { customerModel } = require("../../Schema/customer");

router.post("/save", async (req, res) => {
  let customer = new customerModel(req.body);
  customer.save().then((body) => {
    res.send(body);
    console.log(body);
  });
});

router.get("/delete", async (_, res) => {});

module.exports = router;
