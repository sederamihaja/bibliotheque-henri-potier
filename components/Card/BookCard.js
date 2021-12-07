import styles from 'styles/css/BookCard.module.css';

export default function BookCard({ data }) {

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
      </div>
    </div>
  )
}