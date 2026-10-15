import Link from "next/link";
import { MobileNav } from "./MobileNav";
import styles from "./BackLink.module.css";

export function BackLink() {
  return (
    <div className={styles.bar}>
      <Link className={styles.back} href="/">
        Back
      </Link>
      <MobileNav />
    </div>
  );
}
