import Image from "next/image";
import styles from "../css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Image
          src="/images/AppIconDark.png"
          alt="Logo"
          width={50}
          height={50}
          className={styles.logo}
        />
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Product</h4>
          <a href="#pricing" className={styles.link}>Pricing</a>
          <a href="#features" className={styles.link}>Features</a>
          <a href="#" className={styles.link}>About</a>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Support</h4>
          <a href="#" className={styles.link}>Contact</a>
          <a href="#" className={styles.link}>help and FAQ</a>
        </div>
        
      </div>
    </footer>
  );
}