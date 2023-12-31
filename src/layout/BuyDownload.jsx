import { useContext } from "react";
import BookPreview from "../components/BookPreview";
import BooksContext from "../context/BooksContext";

function BuyDownload() {
  const { showPreview, book } = useContext(BooksContext);

  return (
    <section className="buy" style={showPreview}>
      <BookPreview book={book} />
    </section>
  );
}

export default BuyDownload;
