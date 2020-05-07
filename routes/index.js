// required dependencies
const path = require("path");
// router is an express
const router = require("express").Router();
// import all routes from /api folder
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

// export router to be used in server.js
module.exports = router;
