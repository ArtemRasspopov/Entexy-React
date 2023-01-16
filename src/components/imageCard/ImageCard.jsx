import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./ImageCard.module.scss";

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/image/${image.id}`);
  };

  return (
    <div className={style.wrapper} onClick={() => clickHandler()}>
      {image && <img src={image.download_url} alt={image.author} />}
    </div>
  );
};

export default ImageCard;
