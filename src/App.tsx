function App() {
  return (
    <div>
      <BookList />
    </div>
  );
}

export default App;

const books = [
  {
    title: "The Let Them Theory",
    author: "Mel Robbins",
    image: "./images/book-1.jpg",
    id: 1,
  },
  {
    title: "Lorne: The Man Who Invented Saturday Night Live",
    author: "Susan Marison",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81fIKUQ6lyL._AC_UL600_SR600,400_.jpg",
    id: 2,
  },
  {
    title: "Iron Flame",
    author: "Rebecca Yarros",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91ke43dIxkL._AC_UL600_SR600,400_.jpg",
    id: 3,
  },
  {
    title: "House of Flame and Shadow",
    author: "Sarah J. Maas",
    image:
      "https://m.media-amazon.com/images/I/91n7p-j5aqL._AC_UF1000,1000_QL80_.jpg",
    id: 4,
  },

  {
    title: "The Heaven & Earth Grocery Store",
    author: "James McBride",
    image:
      "https://m.media-amazon.com/images/I/81tdvyI0MeL._AC_UF1000,1000_QL80_.jpg",
    id: 5,
  },

  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    image:
      "https://m.media-amazon.com/images/I/71ZvnK+4JiL._AC_UF1000,1000_QL80_.jpg",
    id: 6,
  },
  {
    title: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    image:
      "https://m.media-amazon.com/images/I/71yNgTMEcpL._AC_UF1000,1000_QL80_.jpg",
    id: 7,
  },
];
function BookList() {
  const getBook = function (id: number) {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book {...book} key={book.id} getBook={getBook} />
      ))}
    </section>
  );
}

type BookProps = {
  title: string;
  author: string;
  image: string;
  id: number;
  getBook: (id: number) => void;
};

function Book({ author, image, title, getBook, id }: BookProps) {
  return (
    <article className="book" onClick={() => getBook(id)}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{author}</h2>
    </article>
  );
}
