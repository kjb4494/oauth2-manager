var express = require("express");
var payload = require("../utils/payload-util");
var adminSvc = require("../services/amdin-svc");
var router = express.Router();

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Get all admin users
 *     description: Retrieve a list of all admin users
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 timestamp:
 *                   type: number
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                     detail:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           idx:
 *                             type: integer
 *                           name:
 *                             type: string
 *                           email:
 *                             type: string
 *                           password:
 *                             type: string
 *                           company:
 *                             type: string
 *                           created_date:
 *                             type: string
 *                             format: date-time
 *                           updated_date:
 *                             type: string
 *                             format: date-time
 *                           latest_login_date:
 *                             type: string
 *                             format: date-time
 *                           scope:
 *                             type: string
 */
router.get("/", async function (req, res, next) {
  res.json(payload.success("ok", await adminSvc.getAll()));
});

router.get("/test", function (req, res, next) {
  const e = req.query.e;
  res.json(payload.success("ok", adminSvc.getErrorTest(e)));
});

module.exports = router;
