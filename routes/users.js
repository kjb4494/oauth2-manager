var express = require("express");
var payload = require("../utils/payload-util");
var usersSvc = require("../services/users-svc");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json(payload.success("ok", usersSvc.getUsers()));
});

router.get("/test", function (req, res, next) {
  const e = req.query.e;
  res.json(payload.success("ok", usersSvc.getErrorTest(e)));
});

module.exports = router;
