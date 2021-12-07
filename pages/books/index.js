import { useState, useEffect } from 'react';

import { booksService } from 'services';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    _getBooks();
  }, [])

  const _getBooks = () => {
    booksService.getAll()
    .then((response) => {
      console.table(response);
    })
  }

  return (
    <div>
      Lists
    </div>
  )
}