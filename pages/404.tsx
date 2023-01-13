import styles from "../styles/Error.module.scss";
import PageHead from "../components/PageHead";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <PageHead title="404" />
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>404</h1>
        <p className={styles["description"]}>Page not found</p>
      </header>
      <main className={styles["main"]}>
        <Nav />
      </main>
    </>
  );
};

export default Home;
