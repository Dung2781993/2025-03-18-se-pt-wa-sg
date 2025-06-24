export default class BookItem {
  constructor(title, author, weeksOnList) {
    this.title = title;
    this.author = author;
    this.weeksOnList = weeksOnList;
  }

  getDisplayTitle() {
    return `${this.title} by ${this.author}`;
  }
}
