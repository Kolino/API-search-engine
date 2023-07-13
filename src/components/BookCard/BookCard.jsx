import style from "./BookCard.module.scss";
import {
  getBookSimpleInfo,
  getBookBroadInfo,
  displayBookInfoProperty,
} from "../../services/book-services";
import { useState } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/material";

const BookCard = ({ book }) => {
  const { description, authors, imageLinks, title } =
    getBookSimpleInfo(book);

  const broadBookInfoObj = getBookBroadInfo(book);

  const [open, setOpen] = useState(false);

  return (
    <article
      onClick={() => setOpen(true)}
      className={style.book}
    >
      <h3 className={style.book__title}>{title}</h3>
      {authors ? (
        authors.length > 3 ? (
          <p>By {authors.slice(0, 3).join(", ")}...</p>
        ) : (
          <p>By {authors.join(", ")}</p>
        )
      ) : (
        <p>No authors found.</p>
      )}
      {imageLinks ? (
        <img
          className={style.book__img}
          src={
            imageLinks.thumbnail
              ? imageLinks.thumbnail
              : imageLinks.smallThumbnail
          }
          alt={`Picture of ${title} book`}
        />
      ) : (
        <img
          className={style.book__img__error}
          src="public/images/icon-image-not-found-free-vector.jpeg"
          alt="Image not found picture"
        />
      )}
      {description ? (
        <p className={style.book__description}>
          {description}
        </p>
      ) : (
        <p>No description found.</p>
      )}

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className={style.book__modal}
      >
        <Box className={style.book__modal__container}>
          <h3
            className={style.book__modal__container__title}
          >
            {displayBookInfoProperty(
              broadBookInfoObj,
              "title"
            )}
          </h3>
          <p>
            {displayBookInfoProperty(
              broadBookInfoObj,
              "authors"
            )}
          </p>
          {broadBookInfoObj.imageLinks ? (
            <img
              className={style.book__modal__container__img}
              src={
                broadBookInfoObj.imageLinks.thumbnail
                  ? broadBookInfoObj.imageLinks.thumbnail
                  : broadBookInfoObj.imageLinks
                      .smallThumbnail
              }
              alt={`Picture of ${broadBookInfoObj.title} book`}
            />
          ) : (
            <p>No image available.</p>
          )}
          <p>
            {displayBookInfoProperty(
              broadBookInfoObj,
              "description"
            )}
          </p>
          <p>
            {displayBookInfoProperty(
              broadBookInfoObj,
              "publisher"
            )}
          </p>
          <p>
            {displayBookInfoProperty(
              broadBookInfoObj,
              "publishedDate"
            )}
          </p>
          <p>
            {displayBookInfoProperty(
              broadBookInfoObj,
              "pageCount"
            )}
          </p>
          <p>
            {displayBookInfoProperty(
              broadBookInfoObj,
              "language"
            )}
          </p>
        </Box>
      </Modal>
    </article>
  );
};

export default BookCard;
