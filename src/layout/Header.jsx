import SearchInput from "../components/SearchInput";
import UserProfile from "../components/UserProfile";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1 className="header__logo-img p-l-m">IBNu HAZIM</h1>
      </div>
      <SearchInput />
      <UserProfile />
    </header>
  );
}

export default Header;
