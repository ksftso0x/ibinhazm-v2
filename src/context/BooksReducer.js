const BooksReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_BOOKS":
      return {
        ...state,
        search: {
          results: action.payload.results,
          page: action.payload.page,
          query: action.payload.query,
          index: action.payload.index,
        },
        loading: false,
        loadBookmarks: false,
        message: {},
      };
    case "RENDER_PREVIEW":
      return {
        ...state,
        book: action.payload.book,
        showPreview: action.payload.preview,
        displayPreview: action.payload.display,
      };
    case "CLOSE_PREVIEW":
      return {
        ...state,
        book: {},
        showPreview: action.payload.preview,
        displayPreview: action.payload.display,
      };
    case "BOOKMARK":
      return {
        ...state,
        bookmarks: action.payload,
      };
    case "GET_BOOKMARKS":
      return {
        ...state,
        loadBookmarks: true,
      };
    case "SET_ERROR":
      return {
        ...state,
        loading: false,
        message: {
          type: "error",
          text: action.payload,
        },
      };
    case "SET_PAGINATION":
      return {
        ...state,
        page: action.payload,
        index: action.payload * 10,
      };
    default:
      return {
        ...state,
      };
  }
};

export default BooksReducer;
