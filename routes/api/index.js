const router = require("express").Router();
const eventRoutes = require("./events");

// routes
router.use(eventRoutes);  // normally I'd nest the events in "/events", users in "/users", e.g.

module.exports = router;
