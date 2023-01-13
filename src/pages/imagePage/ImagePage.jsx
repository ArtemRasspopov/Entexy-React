import React from "react";
import Container from "../../components/shared/container/Container";
import style from "./ImagePage.module.scss";

const ImagePage = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.inner}>
          <img
            className={style.image}
            src={"./images/test-image.jpg"}
            alt="imagename"
          />
          <div className={style.details}>
            <h2 className={style.details__title}>details</h2>
            <ul className={style.details__info}>
              <li className={style.details__info_item}>
                <span>Resolution</span>
                <p>3840 x 2310</p>
              </li>
              <li className={style.details__info_item}>
                <span>Author</span>
                <p>Lorem Ipsum</p>
              </li>
              <li className={style.details__info_item}>
                <span>ID</span>
                <p>00956</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ImagePage;
