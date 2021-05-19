const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/events"
router
  .route("/events")
  .get(eventsController.list)
  .post(eventsController.create);

router 
  .route("/events/clear")
  .delete(eventsController.removeAll);

router
  .route("/events/summary")
  .get(eventsController.summary);

module.exports = router;
