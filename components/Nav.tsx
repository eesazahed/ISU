import { NextPage } from "next";
import Article from "./Article";
import LinkList from "./LinkList";

const Nav: NextPage = () => {
  return (
    <Article
      title="Want to learn more?"
      images={[
        {
          imageURL:
            "https://www.ontarioaway.com/wp-content/uploads/2020/09/things-to-do-in-ontario-canada-scenic-drive.jpg",
          imageAlt: "Highway in Ontario",
        },
      ]}
      reverse
    >
      <>
        <p>
          Feel free to view these great resources filled with things to know
          about Ontario:
        </p>
        <LinkList
          items={[
            { title: "About Ontario", url: "/about" },
            { title: "Map of Ontario", url: "/map" },
            { title: "A dream vacation", url: "/vacation" },
            { title: "In conclusion", url: "/conclusion" },
            { title: "References", url: "/references" },
            { title: "Back to homepage", url: "/" },
          ]}
        />
      </>
    </Article>
  );
};

export default Nav;
