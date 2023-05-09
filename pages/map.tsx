import styles from "../styles/Basic.module.scss";
import PageHead from "../components/PageHead";
import Nav from "../components/Nav";
import Article from "../components/Article";

const Map = () => {
  return (
    <>
      <PageHead title="Map" />
      <main className={styles["main"]}>
        <Article
          title="Map of Ontario"
          images={[
            {
              imageURL: "map",
              imageAlt: "Map of Ontario",
            },
          ]}
          caption="You can also save this image for a more detailed map."
        >
          <>
            <p>View an interactive map of the province:</p>
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7135644.378253564!2d-84.48225266369319!3d48.70056407788386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05b25f5113af%3A0x70f8425629621e09!2sOntario!5e0!3m2!1sen!2sca!4v1671155176307!5m2!1sen!2sca"
              width="100%"
              height="600"
            ></iframe>
          </>
        </Article>

        <Nav />
      </main>
    </>
  );
};

export default Map;
