import React from "react";
import Container from "../../components/shared/container/Container";
import style from "./MainPage.module.scss";
import Button from "../../components/shared/button/Button";

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <div className={style.header}>
          <div className={style.header__inner}>
            <h1 className={style.header__title}>Lorem ipsum dolor sit amet</h1>
            <p className={style.header__subtitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <div className={style.header__buttonWrapper}>
              <Button>TO PICTURES</Button>
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
            {new Array(12).fill('0').map((item, index) => (
              <li className={style.imagesList__item} key={index}>
                
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
