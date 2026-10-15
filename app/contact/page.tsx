import type { Metadata } from "next";
import { BackLink } from "../components/BackLink";
import { ContactForm } from "../components/ContactForm";
import { content } from "../lib/content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact | T.Javkhlan",
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <BackLink />
      <div className={styles.layout}>
        <div>
          <h1 className={styles.title}>Contact</h1>
          <div className={styles.block}>
            <p className={styles.label}>Phone</p>
            <a className={styles.value} href={content.phoneHref}>
              {content.phone}
            </a>
          </div>
          <div className={styles.block}>
            <p className={styles.label}>Email</p>
            <a className={styles.value} href={`mailto:${content.email}`}>
              {content.email}
            </a>
          </div>
          <div className={styles.block}>
            <p className={styles.label}>Social</p>
            <div className={styles.social}>
              <span className={styles.instagram} role="img" aria-label="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="#fff" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="3.4" fill="none" stroke="#fff" strokeWidth="1.7" />
                  <circle cx="17" cy="7" r="0.9" fill="#fff" />
                </svg>
              </span>
              <span className={styles.facebook} role="img" aria-label="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M14 9h2.2V6.2h-2.2c-2 0-3.3 1.2-3.3 3.3V12H8.5v2.8H10.7V20h2.8v-5.2h2.2l.4-2.8H13.5v-1.4c0-.7.3-1.6 1.5-1.6z"
                    fill="#fff"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
