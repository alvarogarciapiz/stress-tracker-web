import styles from "../css/Press.module.css";

export default function Press() {
  return (
    <section className={styles.press}>
      <h2 className={styles.title}>Press Kit</h2>
      <h3 className={styles.subtitle}>Media Assets</h3>
      <p className={styles.description}>
        This file contains screenshots, demo-videos and a high-res icon.
      </p>
      <a href="/assets/stress-app-media-assets.zip" download className={styles.downloadButton}>
        Download Press Kit
      </a>
      <h3 className={styles.subtitle}>App Description</h3>
      <p className={styles.description}>
      Stress Tracker helps you monitor your stress levels effortlessly using data from your Apple Watch. With detailed insights, daily and weekly trends, and recovery scores, you can understand how your body manages stress and make informed decisions for a healthier, more balanced life.
      </p>

      <p className={styles.description}>
        Dive deeper into your well-being with a comprehensive view of your sleep patterns, complete with a sleep duration score and recovery insights. Built with privacy at its core, your data stays securely on your device. Take control of your stress and sleep today with Stress Tracker!
      </p>
      <h3 className={styles.subtitle}>Pricing</h3>
      <p className={styles.description}>
      Stress Tracker is available for a one-time payment of just $2.99—no subscriptions, no hidden fees, and no recurring charges. Enjoy lifetime access to all features forever!
      </p>
      <h3 className={styles.subtitle}>About the developer</h3>
      <p className={styles.description}>
        The app is designed and built by me—Álvaro García Pizarro. As a passionate cloud & devops engineer that loves to play with tech sometimes, I’ve poured my heart into creating Stress Tracker to help improve well-being in a meaningful way. You can connect with me on <a className={styles.link} href="https://x.com/lvrpiz" target="_blank">X</a> or <a className={styles.link} href="https://www.linkedin.com/in/alvarogarciapiz/" target="_blank">LinkedIn</a>. My <a className={styles.link} href="mailto:stressapp@lvrpiz.com">email</a> is always open, and I’d love to hear your thoughts, feedback, or just say hello! 😊
      </p>
    </section>
  );
}