import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "../components/BackLink";
import { content } from "../lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Me | T.Javkhlan",
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <BackLink />
      <div className={styles.layout}>
        <figure className={styles.photo}>
          <Image
            src="/images/about-portrait.png"
            alt="Portrait of T. Javkhlan"
            fill
            unoptimized
            priority
            sizes="(max-width: 800px) min(92vw, 420px), 380px"
          />
        </figure>
        <div>
          <h1 className={styles.title}>A little about me.</h1>
          <div className={styles.copy}>
            {content.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.facts}>
            <section className={styles.fact} aria-labelledby="interests-title">
              <h2 id="interests-title">Сонирхол</h2>
              <ul>
                {content.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className={styles.fact} aria-labelledby="education-title">
              <h2 id="education-title">Боловсрол</h2>
              <p className={styles.school}>{content.education.school}</p>
              <p className={styles.program}>{content.education.program}</p>
              <p className={styles.year}>
                <span>{content.education.year}</span>
                <span>{content.education.date}</span>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
