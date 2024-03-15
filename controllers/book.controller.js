const asyncHandler = require("express-async-handler");
const Book = require("../models/book.model.js");

const getBooks = asyncHandler(async (req, res) => {
  const book = await Book.find({});
  res.status(200).json(book);
});

const getBookById = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id, req.body);

  if (!book) {
    res.status(404);
    throw new Error("No book data found");
  }

  res.status(200).json(book);
});

const createBook = asyncHandler(async (req, res) => {
  const book = await Book.create(req.body);
  res.status(200).json(book);
});

const updateBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) {
    res.status(404);
    throw new Error("No book data found");
  }

  const updatedBook = await Book.findByIdAndUpdate(id, req.body);
  res.status(200).json(updatedBook);
});

const deleteBook = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!book) {
    res.status(404);
    throw new Error("No book data found");
  }

  await Book.deleteOne({
    _id: id,
  });

  res
    .status(200)
    .json({ message: "Book with ID: " + id + " deleted successfully." });
});

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
