class Main {
  public static main(args: string[]): void {
    const bookShelf: BookShelf = new BookShelf(4);
    bookShelf.appendBook(new Book("around the world in 80 days"));
    bookShelf.appendBook(new Book("bible"));
    bookShelf.appendBook(new Book("cinderella"));
    bookShelf.appendBook(new Book("daddy0ling-legs"));
    const it: Iterator = bookShelf.iterator();
    while (it.hasNext()) {
      const book: Book = it.next();
      console.log(book);
    }
  }
}
