function FindWordStartingWith(book, query) {
  // Your code here:

  // OPCION 1

  let text = book.text.toLowerCase();
  query = query.toLowerCase();

  let index = -1;
  let indices = [];

  do {
    index = text.indexOf(query, index + 1);
    if (index >= 0 && (text[index - 1] === " " || index === 0))
      indices.push(index);
  } while (index != -1);

  return indices;

  // OPCION 2

  let bookName = book.text.toLowerCase();
  query = query.toLowerCase();
  const findWords = [];
  bookName = bookName.split(" ");
  let bookNameSearch = bookName.map((word) => word.search(query));
  let index = 0;
  for (let i = 0; i < bookNameSearch.length; i++) {
    if (bookNameSearch[i] === 0) {
      findWords.push(index);
    }
    index = index + bookName[i].length + 1;
  }
  return findWords;
}

module.exports = FindWordStartingWith;
