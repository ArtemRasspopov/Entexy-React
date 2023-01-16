import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ImageCard.module.scss";

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/image/${image.id}`);
  };

  if (image) {
    return (
      <div className={style.wrapper} onClick={() => clickHandler()}>
        <img src={image.download_url} alt={image.author} />
      </div>
    );
  } else {
    return <div className={style.wrapper}></div>;
  }
};

export default ImageCard;
