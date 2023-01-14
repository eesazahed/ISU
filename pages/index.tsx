import styles from "../styles/Home.module.scss";
import PageHead from "../components/PageHead";
import Nav from "../components/Nav";
import Article from "../components/Article";

const Home = () => {
  return (
    <>
      <PageHead title="Home" />
      <header className={styles["header"]}>
        <h1 className={styles["title"]}>Explore Ontario</h1>
        <p className={styles["description"]}>
          Ontario is yours to discover, so learn more!
        </p>
      </header>
      <main className={styles["main"]}>
        <Article
          title="Why visit Ontario?"
          images={[
            {
              imageURL:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/a2/ontario.jpg?w=700&h=500&s=1",
              imageAlt: "Picture of Ontario",
            },
          ]}
        >
          <p>
            Ontario is an incredible place to visit, and the vast group of
            locations within the province contain some of the most spectacular
            landscapes on our planet. Here is a place where you can see
            mountains, glaciers, rivers, lakes, beaches, forests, and more! Not
            an outdoors person? Ontario provides amazing indoor urban locations
            as well. With a variety of museums, malls, and historic sites,
            anyone can have a good time there. Whether you like the city life at
            night, or a mountain hike at sunrise, Ontario has something for
            everyone!
          </p>
        </Article>

        <Nav />
      </main>
    </>
  );
};

export default Home;
