import styles from "../styles/Basic.module.scss";
import PageHead from "../components/PageHead";
import Nav from "../components/Nav";
import Article from "../components/Article";
import Link from "next/link";

const Conclusion = () => {
  return (
    <>
      <PageHead title="Conclusion" />
      <main className={styles["main"]}>
        <Article
          title="In conclusion"
          images={[
            {
              imageURL:
                "https://th-thumbnailer.cdn-si-edu.com/TWen4Xkal9hShL108dBj6pJracA=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/57/fc/57fc452a-0cd4-436a-9ad9-9c67e765d650/istock-638342956.jpg",
              imageAlt: "Picture of Ontario",
            },
          ]}
        >
          <p>
            In conclusion, this site was to display a dream vacation curated for
            enthusiastic tourists who want to discover the fascinating locations
            in Ontario. The fragments of history, culture, and civilization that
            have trickled into Ontario&apos;s society have a lasting influence
            on the province today. Moreover, a factor that amplifies the
            greatness is the diversity in the province as well, displaying a
            great example of a &quot;mixing bowl&quot; of cultures. In addition
            to that, there are plenty of stunning natural features that can be
            found in the province, and it displays the spectacular physical
            diversity of the land. Although it&apos;s uncommon to find a region
            filled with such a vast variety of places, here is where you can
            find skyscrapers, museums, Gothic buildings, canals, waterfalls,
            malls, festivals, forests, rivers, beaches, and islands, all in one
            province.
            <br />
            <br />
            The province of Ontario is a fantastic place to visit, and we
            recommend that tourists from all over the world come visit. Even if
            you live in the province already, going on an organized vacation can
            show things in new perspectives for you. This vacation will be one
            to remember.
            <br />
            <br />
            <Link href="/example">Start booking your vacation! &rarr;</Link>
          </p>
        </Article>
        <Nav />
      </main>
    </>
  );
};

export default Conclusion;
