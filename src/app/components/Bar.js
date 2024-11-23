import Image from "next/image";
import styles from "../css/Bar.module.css";
import Link from "next/link";

export default function Bar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
      <div className={styles.logo}>
        <Image
          src="/images/AppIconDark.png"
          alt="Logo"
          width={32}
          height={32}
        />
      </div>
      </Link>
      <div className={styles.divider}></div>
      <div className={styles.links}>
        <a href="/#features" className={styles.link}>Features</a>
        <a href="/#pricing" className={styles.link}>Pricing</a>
      </div>
      <button className={styles.button}>
        Get the app
        <Image
          src="/images/applewatchIcon.png"
          alt="Apple Watch Icon"
          width={12}
          height={17}
          className={styles.icon}
        />
      </button>
    </nav>
  );
}