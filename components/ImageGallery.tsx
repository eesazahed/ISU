import { NextPage } from "next";
import styles from "../styles/ImageGallery.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Image {
  imageURL: string;
  imageAlt: string;
}

interface Props {
  images?: Image[];
}

const ImageGallery: NextPage<Props> = ({ images }) => {
  if (images) {
    return (
      <div className={styles["gallery"]}>
        <Carousel infiniteLoop={true}>
          {images.map((image, index) => {
            return (
              <div className={styles["img-container"]} key={image.imageURL}>
                <img src={image.imageURL} alt={image.imageAlt} />
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  } else {
    return <></>;
  }
};

export default ImageGallery;
