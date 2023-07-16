import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BooksLoader from "./containers/BooksLoader/BooksLoader";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (data) => {
    setSearchTerm(data.searchTerm);
  };

  return (
    <>
      <Header />
      <SearchBar formSubmit={handleFormSubmit} />
      <BooksLoader searchTerm={searchTerm} />
    </>
  );
}

export default App;
