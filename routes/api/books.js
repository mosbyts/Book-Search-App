const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router
  .route("/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router
  .route("*")
  .post("../../client/build/index.html")
module.exports = router;