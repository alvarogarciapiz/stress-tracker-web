import BlogEntry4 from "../../components/BlogEntry4";
import Bar from "../../components/Bar";
import BarMobile from "../../components/BarMobile";
import styles from "../../css/page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Bar />
      <BarMobile />
      <BlogEntry4 />
    </div>
  );
}