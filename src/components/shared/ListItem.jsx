import { useContext } from "react";
import BooksContext from "../../context/BooksContext";
import sprite from "../../assets/sprite.svg";

function ListItem({ text, icon }) {
  const { bookmarks, renderBookmarks, closePreview } = useContext(BooksContext);

  const handlebookmark = _ => {
    closePreview();

    if (icon === "#icon-bookmarks") {
      if (bookmarks.length === 0) {
        console.log("No bookmarks");
      } else {
        renderBookmarks();
      }
    }
  };

  return (
    <li onClick={handlebookmark} className="nav__list-item">
      {icon && (
        <svg className="icon">
          <use href={sprite + icon} />
        </svg>
      )}
      <h4 className="heading heading__4">{text}</h4>
    </li>
  );
}

export default ListItem;
