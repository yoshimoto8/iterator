import { Aggregate } from "./aggregate";
import { Iterator } from "./iterator";

class BookShelf implements Aggregate {
  private books: Book[];
  private last: number = 0;

  public BookShelf(maxsize: number) {
    this.books = new Book[maxsize]();
  }

  public getBookAt(index: number): Book {
    return this.books[index];
  }
  public appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last + 1;
  }
  public getLength(): number {
    return this.last;
  }
  public iterator(): Iterator {
    return new BookShelfIterator(this);
  }
}

export default BookShelf;
