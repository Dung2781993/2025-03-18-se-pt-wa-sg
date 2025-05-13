// Base class
class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hi, I'm ${this.name} and my email is ${this.email}.`;
  }
}

// Member class extends Person
class Member extends Person {
  constructor(name, email, memberId) {
    super(name, email); // Call parent constructor
    this.memberId = memberId;
  }

  borrowBook(bookTitle) {
    return `Member ${this.name} borrowed "${bookTitle}".`;
  }
}

// Tech debt

// Librarian class extends Person
class Librarian extends Person {
  constructor(name, email, employeeId) {
    super(name, email);
    this.employeeId = employeeId;
  }

  addBook(bookTitle) {
    return `Librarian ${this.name} added "${bookTitle}" to the library.`;
  }
}

// Book class
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `"${this.title}" by ${this.author}, published in ${this.year}.`;
  }
}

// Example usage:
const member = new Member("Alice", "alice@email.com", "M001");
console.log(member.introduce());
console.log(member.borrowBook("The Hobbit"));

const librarian = new Librarian("Bob", "bob@email.com", "L123");
console.log(librarian.introduce());
console.log(librarian.addBook("1984"));

const book = new Book("1984", "George Orwell", 1949);
console.log(book.getSummary());


// Singleton