import Image from "next/image";
import Link from "next/link";
import styles from "../css/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image
            src="/images/AppIconDark.png"
            alt="Logo"
            width={50}
            height={50}
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Product</h4>
          <a href="/#pricing" className={styles.link}>Pricing</a>
          <a href="/#features" className={styles.link}>Features</a>
          <a href="/" className={styles.link}>About</a>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Support</h4>
          <a href="/blog" className={styles.link}>Blog</a>
          <a href="/faq#contact" className={styles.link}>Contact</a>
          <a href="/faq" className={styles.link}>Help and FAQ</a>
          <a href="/press-kit" className={styles.link}>Press Kit</a>
        </div>
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Privacy & Terms</h4>
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className={styles.link}>Terms of use</a>
          <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}