import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/button/Button";
import Input from "../../components/shared/input/Input";
import style from "./LoginPage.module.scss";

const LoginPage = () => {
  const authorizationData = {
    name: "user",
    password: "user",
  };
  const [nameValue, setNameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [formError, setFormError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authStatus") === "authorized") {
      navigate("/");
    }
  }, [navigate]);

  const nameInputHandler = (event) => {
    setNameValue(event.target.value);
    setFormError("");
  };

  const passwordInputHandler = (event) => {
    setPasswordValue(event.target.value);
    setFormError("");
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (
      nameValue === authorizationData.name &&
      passwordValue === authorizationData.password
    ) {
      setFormError("login");
      localStorage.setItem("authStatus", "authorized");
      navigate("/");
    } else if (nameValue.length < 4 || passwordValue.length < 4) {
      setFormError("Fields cannot be shorter than 4 characters");
    } else {
      setFormError("Wrong name or password. Please, try again");
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.bgImage}></div>
      <div className={style.inner}>
        <form className={style.form} onSubmit={(event) => formSubmit(event)}>
          <h2 className={style.form__title}>LOG IN</h2>
          <div className={style.form__inputs}>
            <Input
              placeholder={"Enter your name"}
              value={nameValue}
              onChange={(event) => nameInputHandler(event)}
            />
            <Input
              placeholder={"Enter password"}
              value={passwordValue}
              onChange={(event) => passwordInputHandler(event)}
            />
            {formError && <p className={style.form__errorText}>{formError}</p>}
          </div>
          <div className={style.button_wrapper}>
            <Button type={"submit"}>Continue</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
