// import router from express
const router = require("express").Router();
// import the googleController
const googleController = require("../../controllers/googleController");

// Matches with "/api/google"
router
  .route("/")
  // GET route - call findAll method of googleController
  .get(googleController.findAll);

// export router
module.exports = router;
