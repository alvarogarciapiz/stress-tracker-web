import Image from "next/image";
import styles from "../css/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Stress Tracking Simplified for Apple Watch</h1>
      <h2 className={styles.subtitle}>
        Coming early 2025
      </h2>
      <p className={styles.description}>
        Turn your Apple Watch into a stress management tool, using HRV data to track, analyze, and improve your emotional well-being even on your busiest days, empowering you to lead a more peaceful life.
      </p>
      <div className={styles.imageContainer}>
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          layout="responsive"
          width={2208}
          height={2360}
          className={styles.image}
        />
      </div>
    </section>
  );
}