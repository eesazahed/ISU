import { NextPage } from "next";
import styles from "../styles/Article.module.scss";
import ImageGallery from "./ImageGallery";
import Link from "next/link";
import { useEffect, useState } from "react";
import fetchWeather from "../utils/fetchWeather";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Image {
  imageURL: string;
  imageAlt: string;
}

interface Props {
  title?: string;
  subtitle?: string;
  map?: string;
  location?: string;
  lat?: number;
  lon?: number;
  images?: Image[];
  id?: string;
  caption?: string;
  reverse?: boolean;
  children?: JSX.Element;
}

const Article: NextPage<Props> = ({
  title,
  subtitle,
  map,
  location,
  lat,
  lon,
  images,
  id,
  caption,
  children,
  reverse,
}) => {
  const [temperature, setTemperature] = useState<number>(0);
  const [icon, setIcon] = useState<string>("");

  useEffect(() => {
    if (lat && lon) {
      const loadWeather = async () => {
        const weather = await fetchWeather(lat, lon);
        setTemperature(weather.temperature);
        setIcon(weather.icon);
      };
      loadWeather();
    }
  }, [lat, lon]);

  return (
    <div
      className={`${styles["article-container"]} ${
        reverse && styles["reverse"]
      }`}
      id={id}
    >
      <article className={images ? styles["contains-img"] : styles["no-img"]}>
        <div className={styles["headline"]}>{title}</div>
        {subtitle && (
          <div className={styles["subtitle"]}>
            <p>{subtitle}</p>
            <p>
              <Link target="_blank" href={`https://goo.gl/maps/${map}`}>
                <>
                  {location}
                  <i className="bi bi-geo-alt-fill"></i>
                </>
              </Link>
            </p>
            <p>
              Currently {temperature}&deg;C <i className={icon}></i>
            </p>
          </div>
        )}
        <div className={styles["article"]}>{children}</div>
      </article>
      {images && (
        <div className={styles["img-container"]}>
          {images.length > 1 ? (
            <ImageGallery images={images} />
          ) : (
            <img
              className={styles["img"]}
              src={images[0].imageURL}
              alt={images[0].imageAlt}
              width="100%"
            />
          )}
          {caption && <p>{caption}</p>}
        </div>
      )}
    </div>
  );
};

export default Article;
