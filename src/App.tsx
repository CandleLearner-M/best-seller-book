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
      <Image />
      <Title />
      <Author />
    </article>
  );
}

function Image() {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/91I1KDnK1kL._AC_UL600_SR600,400_.jpg"
      alt="The Let them theory"
    />
  );
}

function Title() {
  return <h1>Title</h1>;
}

function Author() {
  return <h2>Mostafa</h2>;
}
