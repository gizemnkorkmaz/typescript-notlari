import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1>TypeScript Çalışma Notları</h1>
        <p>
          Bu doküman TypeScript öğrenirken aldığım notların bir derlemesidir.
          Faydalandığım kaynakların her biri notlar kısmında kaynakça olarak
          belirtilmiştir.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Okumaya Başla 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout>
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
