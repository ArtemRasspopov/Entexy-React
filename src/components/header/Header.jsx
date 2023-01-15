import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "../shared/container/Container";
import LogoutSvg from "../shared/svg/LogoutSvg";
import style from "./Header.module.scss";

const Header = () => {
  const navigate = useNavigate()

  const logoutHandler = () => {
    localStorage.setItem("authStatus", 'notauthorized');
    navigate('/login')
  }

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
          <button className={style.header__logout} onClick={() => logoutHandler()}>
            Logout
            <LogoutSvg />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Header;
