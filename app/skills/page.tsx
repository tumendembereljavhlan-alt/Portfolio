import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "../components/BackLink";
import { content } from "../lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "My skills | T.Javkhlan",
};

export default function SkillsPage() {
  return (
    <div className={styles.page}>
      <BackLink />
      <div className={styles.layout}>
        <div className={styles.art}>
          <Image
            src="/images/batman.png"
            alt=""
            width={605}
            height={760}
            unoptimized
            className={styles.batman}
          />
        </div>
        <div>
          <h1 className={styles.title}>My skills</h1>
          <ul className={styles.list}>
            {content.skills.map((skill) => (
              <li key={skill.title} className={styles.row}>
                <span className={styles.icon}>
                  <Image
                    src={skill.icon}
                    alt=""
                    width={1024}
                    height={1024}
                    unoptimized
                  />
                </span>
                <span>
                  <span className={styles.name}>{skill.title}</span>
                  <span className={styles.items}>{skill.items}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
