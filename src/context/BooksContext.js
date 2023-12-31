import { createContext, useReducer } from "react";
import BooksReducer from "./BooksReducer";

const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const initialState = {
    book: {},
    search: {
      query: [],
      results: [],
      page: 1,
      index: 1,
    },
    bookmarks: [],
    loading: false,
    showPreview: {},
    loadBookmarks: false,
    displayPreview: { opacity: 0 },
    message: {},
  };

  const [state, dispatch] = useReducer(BooksReducer, initialState);

  // Load books from API
  const getBooks = async (query = "flowers", page) => {
    try {
      closePreview();
      dispatch({ type: "SET_LOADING" });

      const index = page === 1 ? 1 : (page - 1) * 10;

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes/?q=${query}&startIndex=${index}`
      );

      const data = await response.json();

      const books = data.items.map(book => {
        return {
          id: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          publisher: book.volumeInfo.publisher,
          previewLink: book.volumeInfo.previewLink,
          downloadType: book.accessInfo.pdf.isAvailable
            ? "PDF available"
            : "Not available",
          downloadLink: book.accessInfo.pdf.isAvailable
            ? book.accessInfo.pdf.downloadLink
            : book.accessInfo.pdf.acsTokenLink,
          publishedDate: book.volumeInfo.publishedDate,
          description: book.volumeInfo.description?.replaceAll("<p>", " "),
          isbnType: book.volumeInfo.industryIdentifiers
            ? book.volumeInfo.industryIdentifiers[0].type
            : "isbn",
          isbn: book.volumeInfo.industryIdentifiers
            ? book.volumeInfo.industryIdentifiers[0].identifier
            : "undefined",
          pages: book.volumeInfo.pageCount,
          categories: Array.isArray(book.volumeInfo.categories)
            ? book.volumeInfo.categories[0]
            : book.volumeInfo.categories,
          rate: book.volumeInfo.averageRating,
          imageLink: book.volumeInfo.imageLinks.thumbnail,
          language: book.volumeInfo.language,
          isForSale:
            book.saleInfo.saleability === "FREE" ||
            book.saleInfo.saleability === "NOT_FOR_SALE"
              ? "FREE"
              : "BUY",
        };
      });

      dispatch({
        type: "GET_BOOKS",
        payload: { results: books, page, query, index },
      });
    } catch (error) {
      console.log(error.code);
      setMessage(error);
    }
  };

  const setMessage = msg => {
    dispatch({ type: "SET_ERROR", payload: msg.message });
  };

  // Open preview modal
  const renderPreview = book => {
    const preview = {
      transform: "translateX(0)",
      transition: "transform 0.3s ease",
    };

    const display = {
      opacity: "1",
      transition: "opacity 2s ease",
    };

    dispatch({ type: "RENDER_PREVIEW", payload: { preview, book, display } });
  };

  // Close preview modal
  const closePreview = _ => {
    const preview = {
      transform: "translateX(50rem)",
      transition: "transform 0.3s ease",
    };

    const display = {
      opacity: "0",
    };

    dispatch({ type: "CLOSE_PREVIEW", payload: { preview, display } });
  };

  // Bookmark the books
  const bookMark = book => {
    let bookmarks;
    if (
      state.bookmarks.length !== 0 &&
      state.bookmarks.some(bookmark => bookmark.id === book.id)
    ) {
      state.book.bookmarked = false;
      bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== book.id);
    } else {
      bookmarks = [...state.bookmarks, book];
      state.book.bookmarked = true;
    }
    dispatch({ type: "BOOKMARK", payload: bookmarks });
  };

  const renderBookmarks = _ => dispatch({ type: "GET_BOOKMARKS" });

  return (
    <BooksContext.Provider
      value={{
        books: state.search.results,
        page: state.search.page,
        query: state.search.query,
        book: state.book,
        loading: state.loading,
        showPreview: state.showPreview,
        displayPreview: state.displayPreview,
        bookmarks: state.bookmarks,
        loadBookmarks: state.loadBookmarks,
        message: state.message,
        getBooks,
        renderPreview,
        closePreview,
        bookMark,
        renderBookmarks,
        setMessage,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
