const Book = require("../models/book.model.js");

const getBooks = async (req, res) => {
  try {
    const book = await Book.find({});
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id, req.body);

    if (!book) {
      res.status(404).json("Book not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    res.status(200).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(503).json("Service unavailable: " + error);
    res.status(400).json("Bad request: " + error);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) {
      res.status(404).json("Book not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.deleteOne(id, req.body);

    if (!book) {
      res
        .status(404)
        .json("Book could not be deleted because book wasn't found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    res
      .status(200)
      .json({ message: "Book with ID: " + id + " deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
