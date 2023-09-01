var express = require("express");
const user = require("../models/Controller/user");
const profile = require("../models/Controller/profile");

var router = express.Router();

/* GET users listing. */
router.post("/", user.create);

router.post("/login", user.login);

router.get("/profile/get/:email", profile.getProfileData);

router.post("/profile", profile.profileCreate);

router.put("/profile_update", profile.profileUpdate);

module.exports = router;
