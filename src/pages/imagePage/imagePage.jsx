import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../components/shared/container/Container";
import style from "./ImagePage.module.scss";

const ImagePage = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const params = useParams();
  const navigare = useNavigate()

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://picsum.photos/id/${params.id}/info`
        );
        const data = await response.json();
        setImage(data);
      } catch (error) {
        setError(error);
        navigare('/')
      }
    };

    fetchImages();
  }, [params]);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (image) {
    return (
      <div className={style.wrapper}>
        <Container>
          <div className={style.inner}>
            <img
              className={style.image}
              src={image.download_url}
              alt={image.author}
            />
            <div className={style.details}>
              <h2 className={style.details__title}>details</h2>
              <ul className={style.details__info}>
                <li className={style.details__info_item}>
                  <span>Resolution</span>
                  <p>
                    {image.width} x {image.height}
                  </p>
                </li>
                <li className={style.details__info_item}>
                  <span>Author</span>
                  <p>{image.author}</p>
                </li>
                <li className={style.details__info_item}>
                  <span>ID</span>
                  <p>{image.id}</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    );
  } else {
  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.inner}>
          <div className={style.image} />
          <div className={style.details}>
            <h2 className={style.details__title}>details</h2>
            <ul className={style.details__info}>
              <li className={style.details__info_item}>
                <span>Resolution</span>
              </li>
              <li className={style.details__info_item}>
                <span>Author</span>
              </li>
              <li className={style.details__info_item}>
                <span>ID</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};
};

export default ImagePage;
