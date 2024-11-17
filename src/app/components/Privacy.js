import Image from "next/image";
import styles from "../css/Privacy.module.css";

export default function Privacy() {
  return (
    <div className={styles.privacyContainer}>
      <div className={styles.privacyCard}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <span className={styles.bold}>Privacy First: </span>
              Your stress data and insights stays always on your device.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/privacy.png"
            alt="Privacy Icon"
            width={900}
            height={900}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.privacyCard}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <span className={styles.bold}>HealthKit Integration: </span>
              We gather the most precise HRV data from your Apple Watch to provide personalized stress insights.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/healthkit.png"
            alt="HealthKit Icon"
            width={900}
            height={900}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}