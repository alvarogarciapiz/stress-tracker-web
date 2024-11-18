import styles from "../css/Suscribe.module.css";

export default function Suscribe() {
  return (
    <div className={styles.container}>
    <h3 className={styles.title}>Coming soon to the App Store</h3>
        <p className={styles.description}>
          Get notified  about the release and occasional future updates.
        </p>
    <iframe 
      src="https://embeds.beehiiv.com/027bb947-f3fa-4e1a-b8ce-6f3efd707d87?slim=true" 
      data-test-id="beehiiv-embed" 
      height="52" 
      frameBorder="0" 
      scrolling="no" 
      style={{
        margin: 0,
        borderRadius: '0px',
        backgroundColor: 'transparent'
      }}
    />
    </div>
  );
}