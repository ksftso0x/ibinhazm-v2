import React from "react";
import List from "../components/shared/List";

function Aside() {
  const siteMap = [
    {
      id: 1,
      icon: null,
      text: "About This Store",
    },
    {
      id: 2,
      icon: null,
      text: "Privacy & Policy",
    },
    {
      id: 3,
      icon: null,
      text: "Contact IbnHazim",
    },
  ];

  return (
    <aside className="side-bar p-l-m m-t-m">
      <div className="nav nav__sitemap">
        <h3 className="heading heading__3">site map</h3>
        <List items={siteMap} />
      </div>
    </aside>
  );
}

export default Aside;
