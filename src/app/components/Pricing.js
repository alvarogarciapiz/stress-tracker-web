import styles from "../css/Pricing.module.css";

export default function Pricing() {
  return (
    <div id="pricing" className={styles.pricingContainer}>
      <h2 className={styles.title}>Pricing</h2>
      <div className={styles.content}>
        <div className={styles.price}>2,99€</div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            One Payment, Lifetime Access. Just 2.99€.
          </div>
          <button className={styles.button}>Try the App</button>
        </div>
      </div>
    </div>
  );
}