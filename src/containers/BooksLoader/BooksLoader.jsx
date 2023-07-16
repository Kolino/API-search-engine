import { useState, useEffect } from "react";
import { getBooksByTerm } from "../../services/api-interaction-services";
import BooksList from "../BooksList/BooksList";

const BooksLoader = ({ searchTerm }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  // Retrieving books from API
  useEffect(() => {
    if (searchTerm != "") {
      setBooks([]);
      setIsLoading(true);
      setErr(null);
      setStartIndex(0);
      getBooksByTerm(searchTerm)
        .then((retBooks) => {
          // Leaving books as empty array and setting error
          // if no books were found
          if (retBooks.items) setBooks(retBooks.items);
          else
            setErr(
              Error(
                `No books found for search term "${searchTerm}".`
              )
            );
        })
        .catch((e) => setErr(e))
        .finally(() => setIsLoading(false));
    }
  }, [searchTerm]);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && books.length > 0 && (
        <>
          <BooksList
            books={books}
            startIndex={startIndex}
          />
          <p>{`Page ${(startIndex / 10) + 1} of ${Math.ceil(
            books.length / 10
          )}`}</p>
          <div>
            <button
              onClick={() => {
                // startIndex is always a multiple of 10
                if (startIndex > 0)
                  setStartIndex(startIndex - 10);
              }}
            >
              Previous Page
            </button>
            <button
              onClick={() => {
                if (startIndex < books.length - 10)
                  setStartIndex(startIndex + 10);
              }}
            >
              Next Page
            </button>
          </div>
        </>
      )}
      {!isLoading && err && <p>{err.message}</p>}
    </>
  );
};

export default BooksLoader;
