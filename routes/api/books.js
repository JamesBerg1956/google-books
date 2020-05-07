// import router from express
const router = require("express").Router();
// import the bookController
const bookController = require("../../controllers/bookController");

// Matches with "/api/books"
router.route("/")
  // GET route - call findAll method of bookController
  .get(bookController.findAll)
  // POST route - call create method of bookController
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  // GET route - call findById method of bookController
  .get(bookController.findById)
  // PUT route - call update method of bookController
  .put(bookController.update)
  // DELETE route - call remove - method of book Controller
  .delete(bookController.remove);

// Export book router
module.exports = router;
