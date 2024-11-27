import BlogEntry2 from "../../components/BlogEntry2";
import Bar from "../../components/Bar";
import BarMobile from "../../components/BarMobile";
import styles from "../../css/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Bar />
      <BarMobile />
      <BlogEntry2 />
    </div>
  );
}