import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer p-t-s p-b-m">
      <div className="footer__txt">
        <span className="brand">ibn hazim bookstore | {year}</span>
        <span className="developer">Developed by: Okkasha Ally</span>
      </div>
    </footer>
  );
}

export default Footer;
