import PrivacyPolicy from "../components/PrivacyPolicy";
import Bar from "../components/Bar";
import BarMobile from "../components/BarMobile";
import styles from "../css/page.module.css";

export default function Privacy() {
  return (
    <div className={styles.page}>
      <Bar />
      <BarMobile />
      <PrivacyPolicy />
    </div>
  );
}