import styles from "../styles/Basic.module.scss";
import PageHead from "../components/PageHead";
import Article from "../components/Article";
import List from "../components/List";
import LinkList from "../components/LinkList";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <PageHead title="About" />
      <main className={styles["main"]}>
        <Article
          title="Quick facts on Ontario"
          images={[
            {
              imageURL:
                "https://saultstemarie.com/wp-content/uploads/2022/01/is52-1405604062-52872_1453913451.jpeg",
              imageAlt: "Train in Ontario",
            },
          ]}
        >
          <LinkList
            items={[
              { title: "Basic facts", url: "#basic" },
              { title: "Unique physical characteristics", url: "#physical" },
              { title: "Ecosystems", url: "#ecosystems" },
              { title: "Natural resources", url: "#resources" },
              { title: "Major industrial sectors", url: "#industry" },
              { title: "Invasive species", url: "#invasive" },
              { title: "Energy sources", url: "#energy" },
            ]}
          />
        </Article>

        <Article
          title="Basic facts"
          images={[
            {
              imageURL:
                "https://cdn.britannica.com/25/3225-004-EB60D413/Flag-Ontario.jpg",
              imageAlt: "The flag of Ontario",
            },
          ]}
          id="basic"
          caption="The flag of Ontario"
          reverse
        >
          <p>
            Established: July 1, 1867 <br />
            Capitol: Toronto <br />
            Flower: Trillium <br />
            Gemstone: Amethyst <br />
            <br />
            Population: 14,223,942 <br />
            Land area: 892,411.76 square kilometres
            <br />
            Population density: 15.9 people per square kilometre
            <br />
          </p>
        </Article>

        <Article
          title="Ecosystems"
          images={[
            {
              imageURL:
                "https://foodfromthought.ca/wp-content/uploads/2020/11/Ecosystems_11-Small.png",
              imageAlt: "Forest in Ontario",
            },
          ]}
          id="ecosystems"
        >
          <>
            <p>Ontario&apos;s ecosystems include:</p>
            <List
              items={[
                "Niagara Escarpment cliff ecosystem",
                "Boreal ecosystem",
                "Wetland ecosystem",
                "Freshwater bog ecosystem",
                "Carolinian ecosystem",
                "Tundra Ecosystem",
                "Mixed forest ecosystem",
                "Deciduous forest ecosystem",
              ]}
            />
          </>
        </Article>

        <Article
          title="Unique physical characteristics"
          images={[
            {
              imageURL:
                "https://d3d0lqu00lnqvz.cloudfront.net/media/new_article_images/GeographyofOntario/CanadianShield.jpg",
              imageAlt: "Rocks in Ontario",
            },
          ]}
          id="physical"
          reverse
        >
          <p>
            A large majority of the province (almost ⅔ of the landmass) lies
            under the Canadian Shield. The province is mainly covered in
            forests, containing both deciduous and coniferous trees. The soil in
            Ontario is extremely fertile in most locations, as there is lots of
            land for agricultural farmland. Ontario has numerous rivers and
            lakes, with 14.7% of the province&apos;s area being fresh water. In
            addition to that, four out of five of the great lakes are in
            Ontario.
          </p>
        </Article>

        <Article
          title="Natural resources"
          images={[
            {
              imageURL:
                "https://saultonline.com/wp-content/uploads/2020/02/ecology-felling-forest.jpg",
              imageAlt: "A lumber mill in Ontario",
            },
          ]}
          id="resources"
        >
          <>
            <p>Some of Ontario&apos;s natural resources are:</p>
            <List
              items={[
                "Lumber",
                "Tree sap",
                "Uranium",
                "Oil",
                "Salt",
                "Gold",
                "Nickel",
                "Copper",
                "Apples",
                "Grapes",
              ]}
            />
          </>
        </Article>

        <Article
          title="Major industrial sectors"
          images={[
            {
              imageURL:
                "https://d3tibl45x65nxk.cloudfront.net/tg_medialibrary/Images/landing-page/Optimized/AdvancedManufacturing_mobile_optimized.jpg",
              imageAlt: "A metalworker in Ontario",
            },
          ]}
          id="industry"
          reverse
        >
          <>
            <p>Ontario&apos;s major industrial sectors include:</p>
            <List
              items={[
                "Farming",
                "Mining",
                "Fishing",
                "Manufacturing",
                "Metalworking",
                "Construction",
                "Engineering",
                "Transportation",
                "Healthcare",
                "Housing",
              ]}
            />
          </>
        </Article>

        <Article
          title="Invasive species"
          images={[
            {
              imageURL:
                "https://www.ontarioparks.com/parksblog/wp-content/uploads/2015/05/Asian-Carp-900x705.jpg",
              imageAlt: "Asian Carp",
            },
          ]}
          id="invasive"
        >
          <>
            <p>Ontario has many invasive species, including:</p>
            <List
              items={[
                "Asian carp",
                "Round goby",
                "Zebra mussels",
                "Sea lamprey",
                "Red swamp crayfish",
                "Zander",
                "Killer shrimp",
                "Mountain pine beetle",
                "Wels catfish",
                "Stone moroko",
              ]}
            />
          </>
        </Article>

        <Article
          title="Energy sources"
          images={[
            {
              imageURL:
                "https://www.on-sitemag.com/wp-content/uploads/2018/08/pumped_hydro_station_adam_beck.jpg-e1534336945116.jpg",
              imageAlt: "A dam in Ontario",
            },
          ]}
          id="energy"
          reverse
        >
          <>
            <p>Ontario&apos;s variety of energy sources include:</p>
            <List
              items={[
                "Nuclear",
                "Gas",
                "Oil",
                "Hydro",
                "Wind",
                "Biofuel",
                "Solar",
              ]}
            />
          </>
        </Article>

        <Nav />
      </main>
    </>
  );
};

export default About;
