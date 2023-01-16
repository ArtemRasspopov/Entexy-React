import React, { useEffect, useRef, useState } from "react";
import Container from "../../components/shared/container/Container";
import style from "./MainPage.module.scss";
import Button from "../../components/shared/button/Button";
import ImageCard from "../../components/imageCard/ImageCard";

const MainPage = () => {
  const [imagesList, setImagesList] = useState(null);
  const [error, setError] = useState(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://picsum.photos/v2/list?page=1&limit=12"
        );
        const data = await response.json();
        setImagesList(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchImages();
  }, []);

  const toPictureHandler = () => {
    titleRef.current.scrollIntoView();
  };

  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.header}>
          <div className={style.header__inner}>
            <h1 className={style.header__title} ref={titleRef}>
              Lorem ipsum dolor sit amet
            </h1>
            <p className={style.header__subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className={style.header__buttonWrapper}>
              <Button onClick={() => toPictureHandler()}>TO PICTURES</Button>
            </div>
          </div>
          <img
            className={style.header__image}
            src={"./images/laptop.png"}
            alt="laptop"
          />
        </div>
        <div className={style.inner}>
          <h2 className={style.title}>All images</h2>
          <ul className={style.imagesList}>
            {imagesList
              ? imagesList.map((image, index) => (
                  <li className={style.imagesList__item} key={index}>
                    <ImageCard image={image} />
                  </li>
                ))
              : new Array(12).fill("1").map((item, index) => (
                  <li className={style.imagesList__item} key={index}>
                    <ImageCard />
                  </li>
                ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
