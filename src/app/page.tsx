import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "lillyahe",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/madsxlilly" className={styles.link}>
        madsxlilly
      </Link>
    </main>
  );
}
