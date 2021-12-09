import { useState, useEffect } from "react";
import { NotificationManager } from 'react-notifications';

import SumaryCard from "components/Card/SumaryCard";
import OfferCard from "components/Card/OfferCard";
import styles from 'styles/css/Offers.module.css';

function CommercialOffer() {
  const [bestOffers, setBestOffers] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [myCart, setMyCart] = useState([]);
  const [offerResult, setOfferResult] = useState([]);

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    setMyCart(cart);
    fetchCommercialOffers();
    // eslint-disable-next-line
  }, []);

  const fetchCommercialOffers = async () => {
    let data = JSON.parse(localStorage.getItem('cart'));
    let isbns = "";
    if (data.length) {
      data.map((d, index) => {
        isbns += d.isbn;
        data[index + 1] ? isbns += "," : isbns
      })
      try {
        const res = await fetch(`https://henri-potier.techx.fr/books/${isbns}/commercialOffers`);
        const jsonData = await res.json();
        
        calculateCommercialOffers(data, jsonData);
      } catch (err) {
        console.log(err);
      }
    } else {
      NotificationManager.warning("Votre panier est vide", 'Notification');
    }
  }

  const calculateCommercialOffers = (cart, offers) => {
    let offer = offers?.offers;
    let [price, offerPercentage, offerMinus, offerSlice] = Array(4).fill(0);
    if(offer?.length === 1) {
      setBestOffers("Pourcentage");
      setTotalPrice(cart[0].price);
      setOfferResult([
        {
          label: "Pourcentage",
          value: offer[0].value
        },
        {
          label: "Déduction",
          value: 0
        },
        {
          label: "Remboursement",
          value: 0
        },
      ]);
    } else {
      for (const c in cart) {
        price += cart[c].price;
      }
      setTotalPrice(price);
      offerPercentage = price * (offer[0].value / 100);
      offerMinus = offer[1].value;
      offerSlice = (offer[2].value * Math.floor(price / offer[2].sliceValue));
      let offerRes = [
        {
          label: "Pourcentage",
          value: parseFloat(offerPercentage).toFixed(2)
        },
        {
          label: "Déduction",
          value: offerMinus
        },
        {
          label: "Remboursement",
          value: offerSlice
        },
      ];
      setOfferResult(offerRes);
      let lowCost = offerRes.reduce(function(prev, curr) {
        return prev.value > curr.value ? prev : curr;
      });
      setBestOffers(lowCost.label);
    }
  }

  return (
    <>
      <div className={styles.offersContainer}>
        <div className={`d-flex flex-justify-between ${styles.cartSumary}`}>
          <span>
            Résumé de votre panier
          </span>
          <span className={styles.total}>
            {`Total : ${totalPrice} €`}
          </span>
        </div>
        <div className={styles.sumaryGrid}>
          {
            myCart.map((cart, index) => {
              return (
                <div key={index}>
                  <SumaryCard key={index} data={cart} />
                </div>
              )
            })
          }
        </div>
        <div className={styles.cartSumary}>
          Meilleur offre commerciale pour votre acchat : {bestOffers}
        </div>
        <div className={styles.offersGrid}>
          {
            offerResult.map((offerR, index) => {
              return (
                <div key={index}>
                  <OfferCard
                    data={offerR}
                    bestOffers={bestOffers}
                    totalPrice={totalPrice}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default CommercialOffer;