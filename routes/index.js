var express = require("express");
var payload = require("../utils/payload-util");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json(payload.success("fine", {}));
});

module.exports = router;
