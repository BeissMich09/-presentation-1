import React from "react";
import background from "./../assets/Page2.png";
import style from "./SecondPage.module.css";

const SecondPage = (props) => {
  return (
    <div
      onMouseLeave={() => {
        props.changeStatePage("page2", false);
      }}
      onMouseEnter={() => {
        props.changeStatePage("page2", true);
      }}
      className={style.secondPage}
    >
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
