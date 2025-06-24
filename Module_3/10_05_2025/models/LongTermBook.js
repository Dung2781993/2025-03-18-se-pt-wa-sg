import BookItem from "./BookItem.js";

export default class LongTermBook extends BookItem {
  constructor(title, author, weeksOnList, rank) {
    super(title, author, weeksOnList);
    this.rank = rank;
  }

  getDisplayTitle() {
    return `#${this.rank}: ${super.getDisplayTitle()}`;
  }
}
