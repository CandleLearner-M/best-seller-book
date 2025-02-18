import { Book } from "./Book";
import books from "./books";
import Title from "./Title";

function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;

function BookList() {
  const getBook = function (id: number) {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <>
      <Title />
      <section className="booklist">
        {books.map((book, idx) => (
          <Book {...book} key={book.id} getBook={getBook} num={idx + 1} />
        ))}
      </section>
    </>
  );
}
