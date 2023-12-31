import { useState, useContext } from "react";
import BooksContext from "../context/BooksContext";
function SearchInput() {
  const [text, setText] = useState("");

  const { getBooks, closePreview, setMessage } = useContext(BooksContext);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (text === "" || text.length === 0) {
      const msg = {
        type: "error",
        message: "Please type in something to search. It can't be blank",
      };
      setMessage(msg);
    } else {
      closePreview();
      getBooks(text, 1);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="header__search">
      <input
        type="text"
        className="header__search-input"
        placeholder="Search for a book here.."
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchInput;
