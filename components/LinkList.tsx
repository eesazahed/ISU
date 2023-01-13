import { NextPage } from "next";
import styles from "../styles/List.module.scss";
import Link from "next/link";

interface Link {
  title: string;
  url: string;
}

interface Props {
  items: Link[];
}

const LinkList: NextPage<Props> = ({ items }) => {
  return (
    <ul className={styles["list"]}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <p>
              <Link href={item.url}>{item.title}</Link>
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkList;
