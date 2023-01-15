import React from "react";
import Container from "../shared/container/Container";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <Container>
        <ul className={style.inner}>
          <li className={style.inner__item}>
            <h3 className={style.inner__item_title}>Lorem</h3>
            <p className={style.inner__item_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus nisl tincidunt eget nullam non nisi est sit amet.
            </p>
            <ul className={style.cards}>
              <li className={style.cards__item}>
                <img src={"./images/credit-cards/visa.svg"} alt="visa" />
              </li>
              <li className={style.cards__item}>
                <img
                  src={"./images/credit-cards/Mastercard.svg"}
                  alt="mastercard"
                />
              </li>
              <li className={style.cards__item}>
                <img src={"./images/credit-cards/Maestro.svg"} alt="maestro" />
              </li>
            </ul>
          </li>
          <li className={style.inner__item}>
            <h3 className={style.inner__item_title}>Lorem Ipsum</h3>
            <p className={style.inner__item_text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Faucibus nisl tincidunt eget nullam non nisi est sit amet.
              Vulputate odio ut enim blandit volutpat maecenas volutpat. Massa
              tincidunt dui ut ornare lectus sit. Quam elementum pulvinar etiam
              non.
            </p>
          </li>
          <li className={style.inner__item}>
            <h3 className={style.inner__item_title}>Contacts</h3>
            <ul className={style.contacts}>
              <li className={style.contacts__item}>
                <p className={style.contacts__item_title}>London</p>
                <a className={style.contacts__item_address} href={"/"}>
                  26985 Brighton Lane, Lake Forest, CA 92630
                </a>
                <a
                  className={style.contacts__item_number}
                  href={"tel:+19493542574"}
                >
                  +1 (949) 354-2574
                </a>
              </li>
              <li className={style.contacts__item}>
                <p className={style.contacts__item_title}>Paris</p>
                <a className={style.contacts__item_address} href={"/"}>
                  9 Doe Crossing Court <br />
                </a>
                <a
                  className={style.contacts__item_number}
                  href={"tel:+112817622687"}
                >
                  +11 281-762-2687
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </Container>
      <div className={style.bottom}>
        <Container>
          <div className={style.bottom__inner}>
            <p>2022-2023 All rights reserved</p>
            <p>Site is developed by <u>ME</u></p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
