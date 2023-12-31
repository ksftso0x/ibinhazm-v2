import List from "../components/shared/List";

function Navigation() {
  const browse = [
    {
      id: 1,
      icon: "#icon-trophy",
      text: "Top Book",
    },
    {
      id: 2,
      icon: "#icon-map",
      text: "Discover",
    },
    {
      id: 3,
      icon: "#icon-inbox-download",
      text: "Categories",
    },
  ];

  const yourBooks = [
    {
      id: 1,
      icon: "#icon-menu_book",
      text: "reading",
    },
    {
      id: 2,
      icon: "#icon-bookmarks",
      text: "favorites",
    },
    {
      id: 3,
      icon: "#icon-history",
      text: "history",
    },
  ];

  return (
    <nav className="navigation m-t-m p-l-m">
      <div className="nav nav__browse">
        <h3 className="heading heading__3">browse</h3>
        <List items={browse} />
      </div>
      <div className="nav nav__books">
        <h3 className="heading heading__3">your books</h3>
        <List items={yourBooks} />
      </div>
    </nav>
  );
}

export default Navigation;
