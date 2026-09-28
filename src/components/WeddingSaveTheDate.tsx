import { Cormorant_Garamond, Parisienne } from "next/font/google";
import styles from "./WeddingSaveTheDate.module.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-names",
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-date",
});

export default function WeddingSaveTheDate() {
  return (
    <main
      className={`${styles.page} ${cormorantGaramond.variable} ${parisienne.variable}`}
    >
      <div className={styles.content}>
        <h1 className={`${styles.names} ${cormorantGaramond.className}`}>
          Lilly og Mads
        </h1>
        <p className={`${styles.date} ${parisienne.className}`}>
          gifter seg 12. juni 2027
        </p>
        <p className={`${styles.info} ${cormorantGaramond.className}`}>
          Invitasjoner vil bli sendt ut, og mer informasjon om dagen kommer
          her senere.
        </p>
      </div>
    </main>
  );
}
