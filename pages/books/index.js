import { useState, useEffect } from 'react';
import Loader from "react-loader-spinner";
import { NotificationManager } from 'react-notifications';

import BookCard from 'components/Card/BookCard';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { EventEmitter } from "providers/eventEmitter";
import styles from 'styles/css/BookList.module.css';

function BookList({ books }) {
  const [allBooks, setAllBooks] = useState(books);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [myCart, setMyCart] = useState([]);

  useEffect(() => {
    let storedCart = localStorage.getItem('cart');
    if (storedCart !== null) {
      setMyCart(JSON.parse(storedCart));
    } else {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }, [])

  const handleSearch = (ev) => {
    if (ev?.target) {
      let { value } = ev.target;
      if (value === "") {
        setAllBooks(books);
      }
      setFilter(value);
    }
  }

  const applyFilter = () => {
    setLoading(true);
    
    let book = books.filter(
      b => b.title.toLowerCase().indexOf(filter.toLowerCase()) >= 0 ||
      b.synopsis.some((s) => s.toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    );
    setAllBooks(book);

    setLoading(false);
  }

  const addToCart = (e, data) => {
    e.stopPropagation();

    let cart = [...myCart];
    if(cart?.some(c => c?.isbn === data?.isbn)) {
      cart = cart?.filter(c => c?.isbn !== data?.isbn);
      NotificationManager.warning("Livre retiré du panier", 'Notification');
    } else {
      cart?.push(data);
      NotificationManager.success("Livre ajouté au panier", 'Succès');
    }
    setMyCart(cart);
    localStorage.setItem('cart', JSON.stringify(cart));
    EventEmitter.emit("localStorage");
  }

  return (
    <div className={styles.booksContainer}>
      <div className="d-flex">
        <Input
          type="search"
          className="bookInput"
          placeholder="Titre, synopsis..."
          name="search"
          onChange={handleSearch}
          value={filter || ""}
        />
        <Button
          className="simpleButton"
          label="Rechercher"
          onClick={applyFilter}
        />
      </div>
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
              allBooks.map((book, index) => {
                return (
                  <BookCard
                    key={index}
                    data={book}
                    dataCart={myCart}
                    addToCart={(e) => {addToCart(e, book)}}
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

export async function getStaticProps() {
  try {
    const res = await fetch('https://henri-potier.techx.fr/books')
    const jsonData = await res.json();
  
    return {
      revalidate: 20,
      props: {
        books: jsonData,
      },
    }
  } catch (err) {
    return {
      props: {
        books: [],
      },
    };
  }
}

export default BookList;