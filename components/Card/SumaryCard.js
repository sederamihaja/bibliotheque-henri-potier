import styles from 'styles/css/SumaryCard.module.css';

export default function SumaryCard({ data }) {

  return (
    <>
      <div className={styles.sumaryComponent}>
        <div className="d-flex flex-justify-center">
          <div className={styles.imageContent}>
            {/* eslint-disable-next-line */}
            <img src={data.cover} />
          </div>
        </div>
        <div>{data.title}</div>
        <div><strong>Prix : </strong>{`${data.price} €`}</div>
      </div>
    </>
  )
}