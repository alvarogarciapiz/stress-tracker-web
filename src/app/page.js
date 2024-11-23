import { Analytics } from "@vercel/analytics/react"
import styles from "./css/page.module.css";

import Bar from "./components/Bar";
import BarMobile from "./components/BarMobile";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Suscribe from "./components/Suscribe";
import Feature1 from "./components/Feature1";
import Privacy from "./components/Privacy";
import Feature2 from "./components/Feature2";
import Native from "./components/Native";
import Feature3 from "./components/Feature3";
import Complications from "./components/Complications";
import Install from "./components/Install";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className={styles.page}>
        <Bar />
        <BarMobile />
        <Hero />
        <Description />
        <Suscribe />
        <Feature1 />
        <Privacy />
        <Feature2 />
        <Native />
        <Feature3 />
        <Complications />
        <Pricing />
        <Install />
      </div>
      <Footer />
    </div>
  );
}
