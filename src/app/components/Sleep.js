import Image from "next/image";
import styles from "../css/Sleep.module.css";

export default function Feature3() {
  return (
    <div className={styles.featureCard}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Decode Your Sleep, Understand Your Stress</h3>
        <p className={styles.description}>
          Discover how your sleep impacts stress levels with our detailed <span className={styles.highlight}>Sleep Score</span> and recovery scores, powered by HRV and nightly analysis.
        </p>
      </div>
      <div className={styles.imageContainer}>
        {/* <Image
          src="/images/sleep.png"
          alt="Sleep Insights"
          width={1512}
          height={2268}
          className={styles.image}
        /> */}
        <video
          src="/videos/sleep.mp4"
          autoPlay
          loop
          muted
          className={styles.video}
        ></video>
      </div>
    </div>
  );
}