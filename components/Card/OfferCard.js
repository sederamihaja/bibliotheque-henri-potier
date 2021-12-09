import { SvgStar } from "components/Icone/Icone";
import styles from 'styles/css/OfferCard.module.css';

export default function SumaryCard({ data, bestOffers, totalPrice }) {

  return (
    <>
      <div
        className={
          bestOffers === data.label ?
            `${styles.offerComponent} ${styles.offerGreen}`
          : `${styles.offerComponent} ${styles.offerGray}`
        }
      >
        <div className={`d-flex flex-justify-between ${styles.offerTitle}`}>
          {data.label}
          {
            bestOffers === data.label ? SvgStar() : null
          }
        </div>
        <div className={styles.offerContent}>
          <div>Total achat : {`${totalPrice} €`}</div>
          <div>Total offre : {`-${data.value} €`}</div>
          <div>Total à payer : <strong>{`${totalPrice - data.value} €`}</strong></div>
        </div>
      </div>
    </>
  )
}
