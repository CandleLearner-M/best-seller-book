function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

function Book() {
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="The Let them theory" />
      <h1>Title</h1>
      <h2>Mostafa</h2>
    </article>
  );
}
