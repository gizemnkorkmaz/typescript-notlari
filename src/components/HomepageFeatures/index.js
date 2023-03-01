import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "JavaScript ve Daha Fazlası",
    description: (
      <>
        TypeScript, editörünüzle daha sıkı bir entegrasyon sağlamak için
        JavaScript'e ek syntax ekler. Hataları erkenden editörünüzde yakalayın.
      </>
    ),
  },
  {
    title: "Güveneceğiniz Bir Sonuç",
    description: (
      <>
        TypeScript kodu, JavaScript'in çalıştığı her yerde çalışabilen
        JavaScript'e dönüştürülür: Tarayıcıda, Node.js veya Deno üzerinde ve
        uygulamalarınızda.
      </>
    ),
  },
  {
    title: "Ölçeklenebilirlikte Güvenlik",
    description: (
      <>
        TypeScript, JavaScript'i anlar ve tip çıkarımını kullanarak ek kod
        olmadan harika bir araç sağlar.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href="https://www.typescriptlang.org/">{title}</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h1 className={styles.header}>
          <a href="https://www.typescriptlang.org/">TypeScript Nedir?</a>
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
