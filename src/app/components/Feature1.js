import Image from "next/image";
import styles from "../css/Feature1.module.css";

export default function Feature1() {
  return (
    <div id="features" className={styles.featureCard}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Measure How Well You Recharge: 🔋 The Power of Recovery</h3>
        <p className={styles.description}>
          The <span className={styles.highlight}>Recovery Index</span> tracks your body’s ability to recover from daily stress and overnight rest. Using Apple Watch data, it measures fluctuations in heart rate variability (HRV) and key metrics to show how well your body restores itself. Understand your recovery patterns and optimize your routine for better stress resilience and balance.
        </p>
      </div>
      <div className={styles.imageContainer}>
        {/* <Image
          src="/images/recovery.png"
          alt="Recovery Insights"
          width={1540}
          height={2336}
          className={styles.image}
        /> */}
        <video
          src="/videos/recovery.mp4"
          autoPlay
          loop
          muted
          className={styles.video}
        ></video>
      </div>
    </div>
  );
}