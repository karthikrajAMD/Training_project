var express = require("express");
var router = express.Router();
const dashboard = require("../models/Controller/dashboard");

router.post("/upcoming_event", dashboard.createEvent);
router.get("/upcoming_event/get", dashboard.getAllEvent);
router.post("/public_holiday", dashboard.createHoliday);
router.get("/public_holiday/get", dashboard.getAllHoliday);
module.exports = router;
