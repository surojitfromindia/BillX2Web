const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const customerViewRoute = require("../Routers/Customer/Query");
const customerEditRoute = require("../Routers/Customer/Mutation");
const cron = require("node-cron");
const app = express();

(async () => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  await mongoose.connect(
    "mongodb+srv://user_surojit:passsurojit@cluster0.3yu8q.mongodb.net/gstdb",
    { useNewUrlParser: true, useUnifiedTopology: true }
  );

  cron.schedule("*/2 * * * *", () => {
    console.log("Done");
  });

  app.use("/", express.static("public"));
  app.use("/customer/view", customerViewRoute);
  app.use("/customer/edit", customerEditRoute);
  app.get("/price/today", (req, res) => {
    res.send({
      gold: 45000,
      silver : 1500,
    });
  });

  app.listen(8080, () => {
    console.log("Connected");
  });
})();
