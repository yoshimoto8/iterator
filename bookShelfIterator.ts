import { Iterator } from "./iterator";
import BookShelf from "./bookShelf";

class BookShelfIterator implements Iterator {
  private bookShelf: BookShelf;
  private index: number;
  constructor(bookShelf: BookShelf) {
    this.bookShelf = bookShelf;
    this.index = 0;
  }

  hasNext(): boolean {
    if (this.index < this.bookShelf.getLength()) {
      return true;
    } else {
      return false;
    }
  }

  next(): any {
    const book: Book = this.bookShelf.getBookAt(this.index);
    this.index + 1;
    return book;
  }
}
