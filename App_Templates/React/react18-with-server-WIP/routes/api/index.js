const router = require("express").Router();
const exampleRoutes = require('./examples.js')
const testRoutes = require('./test.js')

//  routes
router.use("/example",exampleRoutes)
router.use("/test",testRoutes);

module.exports = router;
