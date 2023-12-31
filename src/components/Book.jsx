import { useContext } from "react";
import BooksContext from "../context/BooksContext";

function Book({ book }) {
  const { renderPreview } = useContext(BooksContext);

  return (
    <div onClick={_ => renderPreview(book)} className="book">
      <img src={book.imageLink} alt={book.title} className="book__img" />
      <div className="book__info">
        <h4 className="heading heading__4 book__title">{book.title}</h4>
        <h5 className="heading heading__5 book__author">{book.author}</h5>
      </div>
    </div>
  );
}

export default Book;
