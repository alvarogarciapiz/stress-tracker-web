import Blog from "../components/Blog";
import Bar from "../components/Bar";
import BarMobile from "../components/BarMobile";
import styles from "../css/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Bar />
      <BarMobile />
      <Blog />
    </div>
  );
}