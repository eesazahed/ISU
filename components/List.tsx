import { NextPage } from "next";
import styles from "../styles/List.module.scss";

interface Props {
  items: String[];
}

const List: NextPage<Props> = ({ items }) => {
  return (
    <ul className={styles["list"]}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
