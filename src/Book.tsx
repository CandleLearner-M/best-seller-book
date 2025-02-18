export type BookProps = {
  title: string;
  author: string;
  image: string;
  id: number;
  getBook: (id: number) => void;
};

export function Book({ author, image, title, getBook, id }: BookProps) {
  return (
    <article className="book" onClick={() => getBook(id)}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <h2>{author}</h2>
    </article>
  );
}
