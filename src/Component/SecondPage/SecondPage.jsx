import React from "react";
import background from "./../assets/background2.png";
import style from "./SecondPage.module.css";

const SecondPage = () => {
  return (
    <div className={style.secondPage}>
      <img src={background} alt="" />
      <h2>Основа терапии — патогенез СД2</h2>
      <div className={style.down}>
        <p>Листайте вниз</p>
        <div className={style.arrow}></div>
      </div>
      <div className={style.horizont_line}></div>
    </div>
  );
};

export default SecondPage;
