import Image from "next/image";
import styles from "../css/Feature2.module.css";

export default function Feature2() {
  return (
    <div className={styles.featureCard}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/daily-evolution.png"
          alt="Daily Evolution and Insights"
          width={1540}
          height={2336}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>📊 Your Stress Story: Daily & Weekly Insights</h3>
        <p className={styles.description}>
        With <span className={styles.highlight}>Daily Evolution</span> and Insights, track how your stress levels change in real time. The interactive graph provides a visual representation of your daily fluctuations, along with an average stress score. You’ll also see a weekly graph, giving you a broader view of your stress patterns over time. This helps you stay aware of your well-being and make mindful decisions to improve your mental health.
        </p>
      </div>
    </div>
  );
}