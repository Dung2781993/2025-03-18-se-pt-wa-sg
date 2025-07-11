import LongTermBook from "./models/LongTermBook.js";

const apiUrl = `http://localhost:8000/api/books`;

// Before https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey} => Try to access in the public api => host by other server
// After http://localhost:8000/api/books => Calling api locally => hostby own machine => running on localhost

const bookListEl = document.getElementById("book-list");
const template = document.getElementById("book-template");

async function fetchAndDisplayBooks() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const books = data.results.books;

    const longTermBooks = books
      .filter((book) => book.weeks_on_list > 3)
      .sort((a, b) => a.rank - b.rank)
      .map(
        (book) =>
          new LongTermBook(
            book.title,
            book.author,
            book.weeks_on_list,
            book.rank
          )
      );

    bookListEl.innerHTML = "";

    longTermBooks.forEach((book) => {
      const clone = template.content.cloneNode(true);
      const titleEl = clone.querySelector(".title");
      const badgeEl = clone.querySelector(".weeks");

      titleEl.textContent = book.getDisplayTitle();
      badgeEl.textContent = `${book.weeksOnList} weeks`;

      if (book.weeksOnList > 10) {
        clone.querySelector("li").classList.add("highlight");
      }

      bookListEl.appendChild(clone);
    });
  } catch (err) {
    console.error("Error loading books:", err.message);
  }
}

fetchAndDisplayBooks();
