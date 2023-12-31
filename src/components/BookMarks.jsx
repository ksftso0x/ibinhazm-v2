import { useContext } from "react";
import BooksContext from "../context/BooksContext";
import Book from "./Book";

function BookMarks() {
  const { bookmarks } = useContext(BooksContext);

  return (
    <section className="app m-t-m p-s m-b-s">
      <div className="recently m-b-m">
        <h2 className="heading heading__2">recently added</h2>
        <div className="recently__books m-t-s">
          {bookmarks.map(book => (
            <Book book={book} key={book.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BookMarks;
