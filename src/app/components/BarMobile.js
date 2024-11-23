import Image from "next/image";
import styles from "../css/BarMobile.module.css";

export default function BarMobile() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a href="/">
        <Image
          src="/images/AppIconDark.png"
          alt="Logo"
          width={30}
          height={30}
          className={styles.logo}
        />
        </a>
        <a href="/" className={styles.logoText}>Stress App</a>
      </div>
      <button className={styles.button}>
        Get the app
        <Image
          src="/images/applewatchIcon.png"
          alt="Apple Watch Icon"
          width={10}
          height={15}
          className={styles.icon}
        />
      </button>
    </nav>
  );
}