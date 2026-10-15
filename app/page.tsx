import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "./components/MobileNav";
import styles from "./page.module.css";

const cards = [
  {
    href: "/about",
    index: "01",
    title: "About Me",
    subtitle: "Миний тухай →",
    image: "/images/david-statue.jpg",
    alt: "",
    className: styles.about,
    fit: styles.cover,
  },
  {
    href: "/projects",
    index: "02",
    title: "Projects",
    subtitle: "Миний төслүүд →",
    image: "/images/laptop-code.jpg",
    alt: "",
    className: styles.projects,
    fit: styles.cover,
  },
  {
    href: "/skills",
    index: "03",
    title: "Skills",
    subtitle: "Ур чадвар →",
    image: "/images/skill-logos.png",
    alt: "",
    className: styles.skills,
    fit: styles.contain,
  },
  {
    href: "/contact",
    index: "05",
    title: "Contact",
    subtitle: "Холбоо барих →",
    image: "/images/telephone.png",
    alt: "",
    className: styles.contact,
    fit: styles.contain,
  },
] as const;

export default function Home() {
  const [about, projects, skills, contact] = cards;

  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#main">
        Skip to content
      </a>
      <header className={styles.header}>
        <p>
          T.Javkhlan <span className={styles.pipe}>|</span> Software Engineer Student
        </p>
        <MobileNav />
      </header>
      <main id="main">
        <h1 className={styles.hero}>
          <span className={styles.word}>PORTFOLIO</span>
          <span className={styles.script}>Javkhlan</span>
        </h1>
        <div className={styles.bento}>
          <BentoCard card={about} />
          <BentoCard card={projects} />
          <div className={styles.bottom}>
            <BentoCard card={skills} />
            <figure className={`${styles.card} ${styles.portrait}`}>
              <Image
                src="/images/portrait-profile.jpg"
                alt="Portrait of Javkhlan"
                fill
                unoptimized
                sizes="(max-width: 800px) 92vw, 360px"
                className={styles.cover}
              />
              <span className={styles.index}>04</span>
            </figure>
            <BentoCard card={contact} />
          </div>
        </div>
      </main>
    </div>
  );
}

function BentoCard({ card }: { card: (typeof cards)[number] }) {
  return (
    <Link className={`${styles.card} ${card.className}`} href={card.href}>
      <Image
        src={card.image}
        alt={card.alt}
        fill
        unoptimized
        priority={card.href === "/about" || card.href === "/projects"}
        sizes="(max-width: 800px) 92vw, (max-width: 1200px) 60vw, 960px"
        className={card.fit}
      />
      <span className={styles.index}>{card.index}</span>
      <span className={styles.label}>
        <span className={styles.title}>{card.title}</span>
        <span className={styles.subtitle}>{card.subtitle}</span>
      </span>
    </Link>
  );
}
