import Button from 'components/Button/Button';
import styles from 'styles/css/BookCard.module.css';

export default function BookCard({ data, dataCart, addToCart }) {

  const trimSynopsis = (synopsis) => {
    console.log(synopsis)
    var length = 23;
    var trimedString =
      synopsis.length > length ? synopsis.substring(0, length - 3) + "..." : synopsis;
    return trimedString;
  };

  return (
    <div className={`d-flex ${styles.cardComponent}`}>
      <div className={styles.imageContent}>
        {/* eslint-disable-next-line */}
        <img src={data.cover} />
      </div>
      <div className={styles.infosContent}>
        <div className={styles.title}>Titre : {data.title}</div>
        <div className={styles.price}>Prix : {`${data.price} €`}</div>
        {
          data.synopsis.map((synopsis, index) => {
            return (
              <p key={index}>
                {synopsis}
              </p>
            )
          })
        }
        <Button
          className="simpleButton"
          label={
            dataCart?.some(c => c?.isbn === data?.isbn) ?
            "Retirer du panier"
            : "Ajouter au panier"
          }
          onClick={addToCart}
        />
      </div>
    </div>
  )
}