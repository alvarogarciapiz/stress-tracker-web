import Image from "next/image";
import styles from "../css/Native.module.css";

export default function Native() {
  return (
    <div className={styles.nativeContainer}>
      <div className={styles.nativeCard}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <span className={styles.bold}>Native SwiftUI: </span>
            Built natively in Swift for Apple Watch, ensuring the best performance and seamless integration.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/swiftui.png"
            alt="SwiftUI Icon"
            width={100}
            height={100}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.nativeCard}>
        <div className={styles.textContainer}>
          <p className={styles.text}>
            <span className={styles.bold}>Complications: </span>
            Offers a variety of complications to choose from, providing you with the information you need at a glance.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/Complication.png"
            alt="Complication Icon"
            width={100}
            height={100}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}