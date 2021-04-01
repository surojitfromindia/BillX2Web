const express = require("express");
const router = express.Router();
const { customerModel } = require("../../Schema/customer");

router.get("/", async (req, res) => {
  const id = req.query.id;
  await customerModel.findOne({ cid: id }).then((doc) => {
    res.send(doc);
  });
});

router.get("/all", async (_, res) => {
  await customerModel.find({}).then((docs) => {
    res.send(docs);
  });
});

module.exports = router;
