const router = require("express").Router();
const exampleRoutes = require("./examples");

//  routes
router.use("/examples", exampleRoutes);

module.exports = router;
