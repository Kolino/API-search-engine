// TODO: create custom errors
export const getBooksByTerm = async (searchTerm) => {
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`
  );
  if (!response.ok)
    throw new Error(
      `Could not retrieve books with search term: ${searchTerm}.`
    );

  // TODO: check errors here?
  return await response.json();
};
