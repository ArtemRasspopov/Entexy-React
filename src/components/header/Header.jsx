import React from "react";
import Container from "../shared/container/Container";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.header}>
      <Container>
        <div className={style.header__inner}>
          <a className={style.logo} href={"/"}>
            LOREM
          </a>
          <a className={style.header__username} href={"/"}>
            USERNAME
          </a>
          <button className={style.header__logout}>Logout</button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
