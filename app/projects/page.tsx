import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "../components/BackLink";
import { content } from "../lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects | T.Javkhlan",
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <BackLink />
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.grid}>
        {content.projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.shot}>
              <Image
                src={project.image}
                alt={project.alt}
                fill
                unoptimized
                sizes="(max-width: 800px) 92vw, 640px"
              />
            </div>
            <div className={styles.meta}>
              <div>
                <h2>{project.name}</h2>
                <p>{project.tags}</p>
              </div>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
