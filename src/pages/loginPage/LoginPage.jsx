import React from "react";
import Button from "../../components/shared/button/Button";
import Input from "../../components/shared/input/Input";
import style from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={style.login}>
      <div className={style.login__bgImage}></div>
      <div className={style.login__inner}>
        <form className={style.login__form}>
          <h2 className={style.login__form_title}>LOG IN</h2>
          <div className={style.login__form_inputs}>
            <Input placeholder={"Enter your name"} />
            <Input placeholder={"Enter password"} />
          </div>
          <div className={style.button_wrapper}>
            <Button>Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
