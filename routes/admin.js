var express = require("express");
var payload = require("../utils/payload-util");
var adminSvc = require("../services/amdin-svc");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  res.json(payload.success("ok", await adminSvc.getAll()));
});

router.get("/test", function (req, res, next) {
  const e = req.query.e;
  res.json(payload.success("ok", adminSvc.getErrorTest(e)));
});

module.exports = router;
