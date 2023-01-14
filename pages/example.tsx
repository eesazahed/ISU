import styles from "../styles/Basic.module.scss";
import PageHead from "../components/PageHead";
import Link from "next/link";
import Article from "../components/Article";

const Example = () => {
  return (
    <>
      <PageHead title="Example" />
      <main className={styles["main"]}>
        <Article title="Booking">
          <>
            <p>
              As this site was intended as an ISU, I did not implement an actual
              booking system.
            </p>
            <br />
            <br />
            <p>
              Visit{" "}
              <Link target="_blank" href="https://ontario.ca">
                ontario.ca &rarr;
              </Link>
            </p>
            <br />
            <p>
              <Link target="_blank" href="https://qurl.gq/91d8g">
                Listen to some music! &rarr;
              </Link>
            </p>
            <br />
            <p>
              <Link href="/conclusion">Go back &larr;</Link>
            </p>
          </>
        </Article>
      </main>
    </>
  );
};

export default Example;
