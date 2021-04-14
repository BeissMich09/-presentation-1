import React from "react";
import background from "./../assets/Page1.png";
import style from "./TitlePage.module.css";

const TitlePage = () => {
  return (
    <div className={style.titlePage}>
      <img src={background} alt="" />
      <div className={style.point_menu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h1>Всегда ли цели терапии СД2 на поверхности?</h1>
      {/* <div className={style.points}> */}
      <div className={style.target}>
        <div className={style.point}></div>
        <p>Цель по HbA1c</p>
      </div>
      <div className={style.hypoglycemia}>
        <p>Гипогликемия</p>
        <div className={style.point}></div>
      </div>
      <div className={style.risks}>
        <p>СС риски</p>
        <div className={style.point}></div>
      </div>
      <div className={style.complications}>
        <p>Осложнения СД</p>
        <div className={style.point}></div>
      </div>
      {/* </div> */}
      <div className={style.down}>
        <p>Листайте вниз</p>
        <div className={style.arrow}></div>
      </div>
      <div className={style.horizont_line}></div>
    </div>
  );
};

export default TitlePage;
