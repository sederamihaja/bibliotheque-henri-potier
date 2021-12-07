import { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";

import BookCard from 'components/Card/BookCard';
import { booksService } from 'services';
import styles from 'styles/css/BookList.module.css';

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _getBooks();
  }, [])

  const _getBooks = () => {
    setLoading(true);
    booksService.getAll()
    .then((response) => {
      setBooks(response);
      setLoading(false);
    })
  }

  console.log(books);
  return (
    <div className={styles.booksContainer}>
      <h3> Liste des livres Henri Potier : </h3>
      {
        loading ? (
          <div className={`d-flex flex-justify-center ${styles.loading}`}>
            <Loader
              type="Oval"
              color="#00BFFF"
              height={100}
              width={100}
            /> 
          </div>
        ) : (
          <div>
            {
              books.map((book, index) => {
                return (
                  <BookCard
                    key={index}
                    data={book}
                  />
                )
              })
            } 
          </div>
        )
      }
    </div>
  )
}