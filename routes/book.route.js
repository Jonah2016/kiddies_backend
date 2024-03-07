const express = require("express");
const router = express.Router();

const {
  createBook,
  getBookById,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/book.controller.js");

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
