const express = require("express");
const router = express.Router();

const Service = require("@/models/Service");

const google = require("./google");
const yammer = require("./yammer");

router.get("/", async (req, res) => {
  var services = await Service.find({});
  res.send(services);
});

router.use("/google", google);
router.use("/yammer", yammer);

module.exports = router;
