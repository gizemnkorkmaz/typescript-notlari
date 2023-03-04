import React from "react";
import Icon from "../components/Icon";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

function HomepageHeader() {
  return (
    <div className={styles.container}>
      <h1>TypeScript Çalışma Notları</h1>
      <p>
        Bu doküman TypeScript öğrenirken aldığım notların bir derlemesidir.
        Faydalandığım kaynakların her biri notlar kısmında kaynakça olarak
        belirtilmiştir.
      </p>
      <div className={styles.buttons}>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          Okumaya Başla 🚀
        </Link>
      </div>
    </div>
  );
}

function HomepageFooter() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/gizemnkorkmaz/eat-the-elephant"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="github" size={20} color="#FFF" />
      </a>
      <a
        href="https://twitter.com/gizemnkorkmaz"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon="twitter" size={20} color="#FFF" />
      </a>
    </footer>
  );
}

export default function Home() {
  return (
    <Layout>
      <main>
        <HomepageHeader />
        <HomepageFooter />
      </main>
    </Layout>
  );
}
