const book = require("../models/Book.js");

exports.getBooks = async (req, res) => {
  try {
    const allBooks = await book.getAllBooks();
    if (!allBooks) {
      return res.status(404).json({ message: "No available books" });
    }
    res.json(allBooks);
  } catch (e) {
    console.error(e);
  }
};

exports.getBookByBookTitle = (req, res) => {
  try {
    const title = req.params.title;
    const result = book.getBookByBookTitle(title);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(result);
  } catch (e) {
    console.error(e);
  }
};
