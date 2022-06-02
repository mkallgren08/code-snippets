// Use this file to test a generic API connection
const router = require("express").Router();
const testController = require("../../controllers/testController");

// Matches with "/api/test"
router
  .route("/")
  .get(testController.pingServer)
  //.post(testController.create);

// Matches with "/api/test/:id"
// router
//   .route("/:id")
//   .get(testController.findById)
//   .put(testController.update)
//   .delete(testController.remove);

module.exports = router;