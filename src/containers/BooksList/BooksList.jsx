import style from "./BooksList.module.scss";
import BookCard from "../../components/BookCard/BookCard";

const BooksList = ({
  books,
  startIndex,
  numToDisplay = 10,
}) => {
  
  return (
    <>
      {books.length > 0 ? (
        <section className={style.books_container}>
          {books
            .slice(startIndex, startIndex + numToDisplay)
            .map((book, i) => (
              <BookCard key={i} book={book} />
            ))}
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default BooksList;
