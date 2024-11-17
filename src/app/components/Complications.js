import Image from "next/image";
import styles from "../css/Complications.module.css";

export default function Complications() {
  return (
    <div className={styles.complicationsCard}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/Complications.png"
          alt="Complications"
          width={1816}
          height={2070}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>Stay Informed with Personalized Complications</h3>
      </div>
    </div>
  );
}