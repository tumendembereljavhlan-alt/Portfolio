"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <h2 className={styles.heading}>Send a message</h2>
      <label className={styles.field}>
        <span>Нэр</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label className={styles.field}>
        <span>Имайл</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className={styles.field}>
        <span>Мессеж</span>
        <textarea name="message" rows={5} required />
      </label>
      <button className={styles.submit} type="submit">
        Илгээх →
      </button>
      {sent ? (
        <p className={styles.note} role="status">
          This preview keeps the message on the page only. It is not sent anywhere yet.
        </p>
      ) : null}
    </form>
  );
}
