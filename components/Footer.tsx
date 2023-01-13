import { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Footer.module.scss";

const Footer: NextPage = () => {
  return (
    <footer className={styles["footer"]}>
      <p className={styles["description"]}>
        This site was designed and developed by{" "}
        <Link href="https://eesa.zahed.ca">Eesa Zahed</Link>. The code is
        available on <Link href="https://github.com/eesazahed/isu">GitHub</Link>
        .
        <br />
        Intended as an Independent Study Unit project for Grade 9 Canadian
        Geography.
      </p>
    </footer>
  );
};

export default Footer;
