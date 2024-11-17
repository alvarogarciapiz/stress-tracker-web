import Image from "next/image";
import styles from "../css/Install.module.css";

export default function Install() {
  return (
    <section className={styles.install}>
      <h3 className={styles.title}>Begin Your Stress-Free Journey Now</h3>
      <p className={styles.description}>
        Start tracking your stress levels and gain valuable insights. It’s time to prioritize your mental health—download now!
      </p>
      <button className={styles.button}>
        Get the app
      </button>
      <div className={styles.imageContainer}>
        <Image
          src="/images/recovery-orange.png"
          alt="Imagen de Install"
          className={styles.image}
          width={600}
          height={400}
        />
      </div>
    </section>
  );
}