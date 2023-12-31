import "./style/App.scss";

import Header from "./layout/Header";
import Navigation from "./layout/Navigation";
import Main from "./layout/Main";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";
import BuyDownload from "./layout/BuyDownload";
import { BooksProvider } from "./context/BooksContext";

function App() {
  return (
    <>
      <BooksProvider>
        <Header />
        <Navigation />
        <Main />
        <Aside />
        <Footer />
        <BuyDownload />
      </BooksProvider>
    </>
  );
}

export default App;
