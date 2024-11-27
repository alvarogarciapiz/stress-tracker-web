// import Image from "next/image";
import styles from "../css/Feature1.module.css";

export default function Feature1() {
  return (
    <div id="features" className={styles.featureCard}>
      <div className={styles.imageContainer}>
        {/* <Image
          src="/images/recovery.png"
          alt="Recovery Insights"
          width={1540}
          height={2336}
          className={styles.image}
        /> */}
        <video
          src="/videos/today.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.video}
        ></video>
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Your Current Stress Summary</h3>
        <p className={styles.description}>
          Stay on top of your stress with <span className={styles.highlight}>Summary View</span>. From current stress scores to detailed HRV tracking, this streamlined design delivers clarity and confidence at a glance.
        </p>
      </div>
    </div>
  );
}