import styles from "../css/PrivacyPolicy.module.css";

export default function Privacypolicy() {
  return (
    <section className={styles.press}>
      <h2 className={styles.title}>Privacy Policy</h2>
      <p className={styles.description}>
        Stress Tracker does not collect or transmit any personal data. All information about your stress levels, sleep data, and recovery metrics are stored locally on your device and are never shared with external servers. Your privacy is our priority, and we ensure that your data remains secure and private.
      </p>
      <p className={styles.description}>
        This Privacy Policy may be updated in the future as new features are added to the app. However, any changes will not compromise your privacy. Your continued use of the app after any updates to this Privacy Policy will signify your acceptance of those changes.
      </p> 
      <p className={styles.last}>Last updated: November 25, 2024</p>
    </section>
  );
}