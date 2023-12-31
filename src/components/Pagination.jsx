import { useContext } from "react";
import BooksContext from "../context/BooksContext";

function Pagination() {
  const { page, query, getBooks } = useContext(BooksContext);

  const handlePagination = action => {
    let currentPage = page;

    if (action === "minus" && page > 1) {
      currentPage -= 1;
      getBooks(query, currentPage);
    }
    if (action === "plus") {
      currentPage += 1;
      getBooks(query, currentPage);
    }
  };

  return (
    <div className="pagination m-t-m">
      <div className="pagination__wrapper">
        <button
          onClick={_ => handlePagination("minus")}
          className="btn btn__pagination btn__pagination-prev"
        >
          prev
        </button>
        <button
          onClick={_ => handlePagination("plus")}
          className="btn btn__pagination btn__pagination-next"
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
