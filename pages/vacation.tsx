import styles from "../styles/Basic.module.scss";
import PageHead from "../components/PageHead";
import Article from "../components/Article";
import LinkList from "../components/LinkList";
import Nav from "../components/Nav";
import Link from "next/link";

const Vacation = () => {
  return (
    <>
      <PageHead title="Vacation" />
      <main className={styles["main"]}>
        <Article
          title="A dream vacation to Ontario"
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
              { title: "Day 1", url: "#1" },
              { title: "Day 2", url: "#2" },
              { title: "Day 3", url: "#3" },
              { title: "Day 4", url: "#4" },
              { title: "Day 5", url: "#5" },
              { title: "Day 6", url: "#6" },
              { title: "Day 7", url: "#7" },
            ]}
          />
        </Article>

        <Article
          title="Day 1: Visit the Rideau Canal Historic Site"
          subtitle="Historic site"
          map="2K16CfRFQ1F3HpUg7"
          location="Ottawa"
          lat={45.3964314}
          lon={-75.7270779}
          images={[
            {
              imageURL:
                "https://www.digitalschool.ca/wp-content/uploads/2018/06/rideau-canal.jpg",
              imageAlt: "Rideau Canal",
            },
            {
              imageURL:
                "https://www.pcma.org/wp-content/uploads/2019/10/Skating-on-the-Rideau-Canal-Skateway-003-credit-Ottawa-Tourism-1.jpg",
              imageAlt: "Rideau Canal Historic Site",
            },
            {
              imageURL:
                "https://media-cdn.tripadvisor.com/media/photo-s/0e/cf/5b/85/rideau-canal-ottawa-tourism.jpg",
              imageAlt: "Rideau Canal",
            },
            {
              imageURL:
                "https://www.planetware.com/photos-large/CDN/canada-ottawa-rideau-canal.jpg",
              imageAlt: "Rideau Canal",
            },
          ]}
          id="1"
        >
          <p>
            Welcome to the city of Ottawa, Canada&apos;s capitol! When
            you&apos;re ready, the first place you should visit is the Rideau
            Canal, North America&apos;s best-preserved &quot;slackwater&quot;
            canal. Right on the Rideau River lies a great scenic view for
            photography, as you get a terrific view of the city of Ottawa. This
            location is also ideal for ice skating in the winter, with a grand,
            open space to enjoy. The Rideau Canal opened in 1832, long before
            Canada became a country, and still operates today. After the War of
            1812, there was a suspicion that the United States of America was
            planning to invade Upper Canada (present-day Ontario). The Rideau
            Canal, along with several others, was then constructed to allow
            boats to travel along the Rideau River, from Montreal, Quebec, to
            Kingston, Ontario.
            <br />
            <br />
            <Link
              target="_blank"
              href="https://ncc-ccn.gc.ca/places/rideau-canal-skateway"
            >
              Learn more about the Rideau Canal &rarr;
            </Link>
          </p>
        </Article>
        <Article
          title="Day 2: See the House of Commons"
          subtitle="Organized tour"
          map="gLKMBgLvJVTbg6g87"
          location="Ottawa"
          lat={45.4241466}
          lon={-75.7006458}
          images={[
            {
              imageURL:
                "https://foodsecurecanada.org/sites/foodsecurecanada.org/files/article_images/house_of_commons.jpg",
              imageAlt: "The House of Commons",
            },
            {
              imageURL:
                "https://ottawatourism.ca/sites/default/files/images/2020/02/Senate-of-Canada-2019-inside_DSC9754-1-credit-Ottawa-Tourism-Sofie-Sharom-in-print.jpg",
              imageAlt: "The House of Commons",
            },
            {
              imageURL:
                "https://www.ctvnews.ca/polopoly_fs/1.3976222.1529111924!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
              imageAlt: "The House of Commons",
            },
            {
              imageURL:
                "https://www.airtransat.com/experiencetransat/wp-content/uploads/2019/04/Parliament-Hill-ottawa-1024x770.jpg",
              imageAlt: "The House of Commons",
            },
          ]}
          id="2"
        >
          <p>
            Hopefully you had a great time in Ottawa yesterday, but don&apos;t
            leave just yet! To start your day, head over to the scenic
            Parliament Hill and participate in a guided tour at the House of
            Commons, a must-see destination for any tourist visiting the capitol
            of Canada. You can visit and explore the place where Canadian
            Federal elections take place! As well as the building&apos;s
            dominant political significance, it&apos;s also a beautiful and
            historic building. Designed in the Victorian Gothic style, the House
            of Commons features remarkable architectural details and is a
            significant example of the rich cultural heritage of Ottawa. In
            addition to that, you can take a free 40-minute tour of the building
            to learn more about its history, view the astonishing pieces of
            artwork, and experience visiting one of Canada&apos;s most important
            buildings. Originally constructed in the West Block of the Canadian
            Parliament, the Parliament Buildings were opened on the 6th of June,
            1866. A fire destroyed all of the Parliament Buildings in 1916 (with
            the exception of the Library of Parliament). Consequently, a
            reconstruction effort started that year and finished in 1927. Just
            remember, book your tickets in advance, as they run out very
            quickly.
            <br />
            <br />
            <Link
              target="_blank"
              href="https://lop.parl.ca/sites/Visit/default/en_CA/HOC"
            >
              Learn more and get your tickets here &rarr;
            </Link>
          </p>
        </Article>
        <Article
          title="Day 3: Tour the Senate of Canada Building"
          subtitle="Organized tour"
          map="MU6xTbPYvQULpKki9"
          location="Ottawa"
          lat={45.3667654}
          lon={-75.9982367}
          images={[
            {
              imageURL:
                "https://www.ctvnews.ca/content/dam/ctvnews/en/images/2022/7/14/senate-chamber-1-5987142-1657789715430.jpg",
              imageAlt: "The Senate of Canada Building",
            },
            {
              imageURL:
                "https://www.tpsgc-pwgsc.gc.ca/citeparlementaire-parliamentaryprecinct/images/conference-img3.jpg",
              imageAlt: "The Senate of Canada Building",
            },
            {
              imageURL:
                "https://canadiangeographic.ca/wp-content/uploads/2022/02/screen_shot_2018-12-14_at_5.15.35_pm-1024x678.png",
              imageAlt: "The Senate of Canada Building",
            },
            {
              imageURL:
                "https://sencanada.ca/media/najof2x4/com_pho_updated-scb-chamber-flags_2019-03-13_dsc_4289.jpg",
              imageAlt: "The Senate of Canada Building",
            },
          ]}
          id="3"
        >
          <p>
            For your final day in Ottawa, you&apos;ll be participating in a
            guided tour of the Senate of Canada Building, another major
            Parliament Building. The tour lasts 30 minutes and, similar to the
            House of Commons Guided Tour, is completely free of charge. Located
            a block away from Parliament Hill, the building possesses major
            political significance and noteworthy architectural design. This
            place is where you can examine the distinguished Senate Chamber and
            learn about the work of the Senators. Until 1966, the building was
            actually the city&apos;s central railway station, called Ottawa
            Union Station. Therefore, the design of the building is quite
            contrasting to the House of Commons Building. The railway station
            operated from 1912 to 1966, until the tracks were removed and there
            were plans for the building to be demolished. However, it remained
            intact, because one year later was Canada&apos;s centenary
            celebrations, which celebrated the 100th anniversary of the Canadian
            Confederation. The building became a visitors centre during the
            time, and was occasionally used for government meetings in the years
            after. However, it didn&apos;t become the Senate of Canada Building
            until 2019, when it was re-opened after 6 years of rehabilitation.
            Therefore, you&apos;ll be visiting a structure that was
            reconditioned relatively in recent years. Be sure to take lots of
            pictures, and ask lots of questions!
            <br />
            <br />
            <Link
              target="_blank"
              href="https://lop.parl.ca/sites/Visit/default/en_CA/Senate"
            >
              Learn more and get your tickets here &rarr;
            </Link>
          </p>
        </Article>
        <Article
          title="Did you know?"
          images={[
            {
              imageURL:
                "https://images.dailyhive.com/20210210065329/canada-ottawa-cold.jpg",
              imageAlt: "Ottawa in the snow",
            },
          ]}
        >
          <p>
            Queen Victoria of England chose Ottawa as the capitol city of Canada
            in 1857. Many people thought that the capitol would be in a larger
            city, such as Toronto or Montreal. Regardless, Queen Victoria
            decided that Ottawa would be a prime location, as the city was on
            the border of Ontario and Quebec, providing the sustenance of a
            river, as well as the diversity of both English and French speakers.
            The city was also far from the United States border, as the British
            Empire was at war with the USA from 1812-1815. Unlike Toronto and
            Montreal, Ottawa was farther north from the border and provided a
            higher level of defence.
            <br />
            <br />
            <Link
              target="_blank"
              href="https://www.britannica.com/place/Ottawa/The-contemporary-city"
            >
              Learn more about Ottawa and its history &rarr;
            </Link>
          </p>
        </Article>
        <Article
          title="Day 4: Enjoy the Taste of the Danforth"
          subtitle="Festival"
          map="fq1rYtnyn4urhSG88"
          location="Toronto"
          lat={43.6792144}
          lon={-79.3458624}
          images={[
            {
              imageURL:
                "https://s3.amazonaws.com/lws_lift/compten/images/blog/1502303280_danforth.png",
              imageAlt: "Taste of the Danforth",
            },
            {
              imageURL:
                "https://i.cbc.ca/1.5243018.1565483577!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_780/26th-annual-taste-of-the-danforth.JPG",
              imageAlt: "Taste of the Danforth",
            },
            {
              imageURL:
                "https://images.squarespace-cdn.com/content/567d5140841abaa3c9136278/1488891735700-DDWZNLMM32ZG76C6QLHE/?content-type=image%2Fjpeg",
              imageAlt: "Taste of the Danforth",
            },
            {
              imageURL:
                "https://img1.10bestmedia.com/Images/Photos/264761/p-Beef-kabobs--1-_55_660x440.jpg",
              imageAlt: "Taste of the Danforth",
            },
          ]}
          id="4"
        >
          <p>
            After you have enjoyed the city of Ottawa, it&apos;s now time to
            head south to Toronto. Take Highway 401 West if you&apos;re driving,
            or travel by airplane and arrive in the city via Toronto&apos;s two
            main airports. The first place you should visit is the Taste of the
            Danforth festival. East of the Don Valley Parkway lies Danforth
            Avenue, which is also known as Greektown, due to its majority
            population being of Greek descent. The festival is a three-day
            event, as well as one of Toronto&apos;s largest. Attendance numbers
            have reached up to 1.6 million people in previous situations. The
            Taste of the Danforth festival has occurred annually since 1993, and
            has happened every year since then until 2020. As of now, the last
            was in 2019, but there are plans for it to take place again in 2023.
            One of the main reasons you&apos;ll be going is because of the
            amazing food and refreshments. The food served is of primarily Greek
            cuisine, which includes numerous types of meat, such as chicken,
            beef, and pork, as well as abounding ethnically Greek dishes, such
            as souvlaki, spanakopita, and gyros. You can also participate in
            other activities such as beverage tasting, face-painting, and games.
            Nevertheless, you should try to attend one day of the festival,
            considering tomorrow you&apos;ll be leaving the city. A
            recommendation for you is to end the night by visiting Eaton Centre,
            the city&apos;s biggest mall in downtown Toronto.
            <br />
            <br />
            <Link
              target="_blank"
              href="https://greektowntoronto.com/taste-of-the-danforth/"
            >
              Learn more about Taste of the Danforth &rarr;
            </Link>
          </p>
        </Article>
        <Article
          title="Day 5: Come to the majestic Niagara Falls"
          subtitle="Tourist attraction"
          map="fR4BNPVNWCAJaWrj8"
          location="Niagara"
          lat={43.0538471}
          lon={-79.2281181}
          images={[
            {
              imageURL:
                "https://blog-assets.thedyrt.com/uploads/2019/07/shutterstock_796161172-1.jpg",
              imageAlt: "Niagara Falls",
            },
            {
              imageURL:
                "https://cdn.britannica.com/30/94430-050-D0FC51CD/Niagara-Falls.jpg",
              imageAlt: "Niagara Falls",
            },
            {
              imageURL:
                "https://www.niagarafallslive.com/wp-content/uploads/2013/09/opt-fallsilluminated900-1.jpg",
              imageAlt: "Niagara Falls",
            },
            {
              imageURL:
                "https://destination-ontario-prod.s3.ca-central-1.amazonaws.com/files/s3fs-public/2021-07/Niagara-Falls-Illuminated_0.jpg?VersionId=slSzZBdnIS8xmZVNEZzPaWH0DSyrSIdl",
              imageAlt: "Niagara Falls",
            },
          ]}
          id="5"
        >
          <p>
            The majestic Niagara Falls are a must-see for anyone coming to
            Ontario. Only a two-hour drive from downtown Toronto lies the three
            grand waterfalls separated by national borders. The American Falls
            and Bridal Veil Falls are on the US side of the border, whereas the
            Horseshoe Falls are on the Canadian side of the border. Today
            you&apos;ll be sightseeing at Horseshoe Falls. Here is a great place
            to take pictures, so when you arrive be sure to bring your phone or
            camera; this location is great for photography! A plentiful amount
            of water vapour will be in the air, and you might find it quite
            humid. However, the view is definitely worth it! There&apos;s a
            limited number of places on earth where you can see waterfalls
            similar to the Horseshoe Falls. Nonetheless, you can see the 57
            metre (188 feet) high waterfall that has a flow rate of 2580.7
            metres per second (681,750 gallons per second). The Horseshoe Falls
            is the most powerful waterfall in North America, as measured by flow
            rate. It is even utilised as a hydroelectric power generator,
            converting the motion created by flowing water into electricity. As
            the sun starts to set, and nightfall approaches, you&apos;ll be
            mesmerised by the scenic view of the falls at night, when
            they&apos;re illuminated with coloured lights. When you&apos;re
            ready, you can end the night at one of Niagara&apos;s numerous
            nearby restaurants, or take a peaceful long rest.
            <br />
            <br />
            <Link target="_blank" href="https://niagarafalls.ca/">
              Learn more about Niagara Falls &rarr;
            </Link>
          </p>
        </Article>
        <Article
          title="Day 6: Visit Bruce Peninsula National Park"
          subtitle="National park"
          map="TpogSq74gwUJCDGQ9"
          location="Bruce Peninsula"
          lat={44.9999991}
          lon={-81.3420881}
          images={[
            {
              imageURL:
                "https://images.squarespace-cdn.com/content/v1/5eb81cda694aa05df3bd0b15/1589506287768-B73R5INKJO9L41VRJNF5/Indian+Head+Cove+Bruce+Peninsula+national+park?format=750w",
              imageAlt: "Bruce Peninsula National Park",
            },
            {
              imageURL:
                "https://www.voyageurtripper.com/wp-content/uploads/2020/10/Bruce-Peninsula-Camping-Grotto-Cave-1024x768.jpg",
              imageAlt: "Bruce Peninsula National Park",
            },
            {
              imageURL:
                "https://i0.wp.com/kayak-ontario.com/wp-content/uploads/2016/10/fotor_147727666368770.jpg?fit=2048%2C1536&ssl=1",
              imageAlt: "Bruce Peninsula National Park",
            },
            {
              imageURL:
                "https://cdn-adventures-live.azureedge.net/adventurescache/4/2/e/6/0/0/42e6001deb798ba953e2434267ac6d28a73a3ca0.webp",
              imageAlt: "Bruce Peninsula National Park",
            },
          ]}
          id="6"
        >
          <p>
            Near the town of Tobermory Ontario, Bruce Peninsula National Park
            lies between Lake Huron and the Georgian Bay. The park possesses the
            eye-catching turquoise waters of Lake Huron. Set your foot forwards
            and trek the rocky shores, scattered along the coastline. You
            don&apos;t need to go to Fiji to see blue water and diverse
            wildlife. Moreover, it&apos;s time for a road trip! You&apos;ll be
            heading to Bruce Peninsula National Park, one of Ontario&apos;s five
            National Parks. The journey is approximately 4.5 hours long by car,
            not counting any stops. If you leave early in the morning from
            Niagara, you should arrive in the town of Tobermory before noon.
            This is where you arrive at your pre-booked cabin. The town is less
            than a 15-minute drive away from the National Park, so you can soon
            start exploring when you&apos;re ready. There are countless
            activities for park visitors, including hiking, swimming, canoeing,
            kayaking, photography, camping, fishing, mountain-climbing, and
            sightseeing at the Grotto, which is one of the main reasons for
            visiting the park. However, scaling the grotto is a task for
            experienced hikers, as a fall from the tall height can be fatal.
            There are also multiple trails for inexperienced hikers, which are
            easier and more relaxing. Activities for almost everyone can be
            found at this park. If you&apos;re into photography, this is one of
            the best National Parks for taking photos of the animals, plants,
            and park life. You&apos;re only here for one day, so you should
            spend as much time as you can being active around the park. At
            night, return to your cabin and take an excellent, long rest; you
            deserve it.
            <br />
            <br />
            <Link target="_blank" href="https://parks.canada.ca/pn-np/on/bruce">
              Learn more about Bruce Peninsula National Park &rarr;
            </Link>
          </p>
        </Article>
        <Article
          title="Day 7: Hike the trails of Flowerpot Island"
          subtitle="Exercise"
          map="T2vXw5d5ejm6ETHA8"
          location="Flowerpot Island"
          lat={45.3007543}
          lon={-81.6346162}
          images={[
            {
              imageURL:
                "https://i0.wp.com/unusualplaces.org/wp-content/uploads/2022/08/Depositphotos_283571770_S.jpg",
              imageAlt: "Flowerpot Island",
            },
            {
              imageURL:
                "https://www.futureautolabourforce.ca/wp-content/uploads/2021/07/limestone-cliff-face-along-the-bruce-trail-near-lions-head-ontario-picture-id1184948740-768x548.jpg",
              imageAlt: "Flowerpot Island",
            },
            {
              imageURL:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/96/96/d7/flowerpot-island-lighthouse.jpg?w=1200&h=1200&s=1",
              imageAlt: "Flowerpot Island",
            },
            {
              imageURL:
                "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/4-flowerpot-island-canada-joana-kruse.jpg",
              imageAlt: "Flowerpot Island",
            },
          ]}
          id="7"
        >
          <p>
            It&apos;s unfortunate that this dream vacation has to come to an end
            so soon. Nonetheless, keep a positive attitude, in view of the fact
            that one of the best attractions has been saved for last.
            Furthermore, right off the waters of the imposing Lake Huron lies
            the nearby Flowerpot Island, containing two spectacular rock
            formations that resemble structures similar to flowerpots. The shape
            comes from centuries of erosion. The island is 6.5km away from
            Tobermory, and to visit the island, you&apos;ll need a boat ride.
            Thankfully, there are many ferries in the city that will transport
            you to the island for a reasonable price. The island is not very
            large, as it has a total area of 2 square kilometres (0.76 square
            miles). Here is a great place for some exercise, as the abounding
            rock formations provide a challenging yet thrilling hiking trail for
            visitors, providing amazing views of the fantastic scenery along the
            way. You&apos;ll spend approximately 4-5 hours viewing the
            flowerpots, lighthouse, cave, and hiking the entire loop trail.{" "}
            <b>
              Accordingly, be sure to bring lots of water, for the reason that
              there is no tap water on the island!
            </b>
            <br />
            <br />
            <Link
              target="_blank"
              href="https://parks.canada.ca/amnc-nmca/on/fathomfive/activ/flowerpot"
            >
              Learn more about Flowerpot Island &rarr;
            </Link>
            <br />
            <br />
            Hopefully you&apos;ll find this wonderful vacation appealing and
            worth taking. Ontario is an amazing, exemplary province, and we hope
            you&apos;ll have an outstanding time there!
          </p>
        </Article>
        <Nav />
      </main>
    </>
  );
};

export default Vacation;
