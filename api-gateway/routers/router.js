var express = require("express");
var router = express.Router();
var findTripService = require("./findtripService");
router.use((req, res, next) => {
  next();
});
router.use(findTripService);
module.exports = router;
