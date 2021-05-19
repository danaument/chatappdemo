const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("", apiRoutes);  // normally I'd use "/api" or something to distinguish api routes from html routes

module.exports = router;
