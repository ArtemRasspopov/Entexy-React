import React from "react";
import Button from "../../components/shared/button/Button";
import Input from "../../components/shared/input/Input";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.login}>
      <div className={styles.login__bgImage}></div>
      <div className={styles.login__inner}>
        <form className={styles.login__form}>
          <h2 className={styles.login__form_title}>LOG IN</h2>
          <div className={styles.login__form_inputs}>
            <Input placeholder={"Enter your name"} />
            <Input placeholder={"Enter password"} />
          </div>
          <Button>Continue</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
