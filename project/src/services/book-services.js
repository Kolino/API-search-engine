export const getBookSimpleInfo = (book) => {
  let description = null;
  const volumeInfo = book.volumeInfo;
  // Attempting to retrieve text snippet, otherwise
  // retrieving full description
  if (book.searchInfo)
    description = book.searchInfo.textSnippet;
  else if (volumeInfo.description)
    description = volumeInfo.description;
  const authors = volumeInfo.authors;
  const imageLinks = volumeInfo.imageLinks;
  const title = volumeInfo.title;

  return { description, authors, imageLinks, title };
};

export const getBookBroadInfo = (book) => {
  const retObj = { ...getBookSimpleInfo(book) };

  const volumeInfo = book.volumeInfo;
  retObj.publisher = volumeInfo.publiher;
  retObj.publishedDate = volumeInfo.publishedDate;
  // Updating description to longer form if it exists
  if (volumeInfo.description)
    retObj.description = volumeInfo.description;
  retObj.pageCount = volumeInfo.pageCount;
  retObj.language = volumeInfo.language;

  return retObj;
};

export const displayBookInfoProperty = (
  bookInfoObj,
  property
) => {
  const propertyNamesMapping = {
    authors: "Authors",
    title: "Title",
    publisher: "Publisher",
    publishedDate: "Date published",
    description: "Description",
    pageCount: "Page count",
    language: "Language",
  };

  // Authors is stored as an array that is to be joined
  if (bookInfoObj[property] && property === "authors")
    return `By ${bookInfoObj[property].join(", ")}`;

  if (bookInfoObj[property])
    return `${propertyNamesMapping[property]}: ${bookInfoObj[property]}`;

  return "No " + property + " found.";
};
