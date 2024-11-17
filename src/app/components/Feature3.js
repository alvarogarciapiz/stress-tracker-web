import Image from "next/image";
import styles from "../css/Feature3.module.css";

export default function Feature3() {
  return (
    <div className={styles.featureCard}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Dive into Your Daily Stress Insights</h3>
        <p className={styles.description}>
          Your stress history, beautifully visualized. Track daily trends at a glance, and tap on any entry to dive deeper into the details for personalized insights.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/images/historyEvolution.png"
          alt="History Evolution"
          width={2420}
          height={2941}
          className={styles.image}
        />
      </div>
    </div>
  );
}