import React from "react";
import background from "./../assets/Page1.png";
import {
  target,
  point,
  hypoglycemia,
  orange,
  white,
  titlePage,
  point_menu,
  risks,
  complications,
  down,
  arrow,
  horizont_line,
} from "./TitlePage.module.css";

const TitlePage = ({ count }) => {
  return (
    <div className={titlePage}>
      <img src={background} alt="" />
      <div className={point_menu}>
        <div className={count === 0 ? orange : white}></div>
        <div className={count === 1 ? orange : white}></div>
        <div className={count === 2 ? orange : white}></div>
      </div>
      <h1>Всегда ли цели терапии СД2 на поверхности?</h1>

      <div className={target}>
        <div className={point}></div>
        <p>Цель по HbA1c</p>
      </div>
      <div className={hypoglycemia}>
        <p>Гипогликемия</p>
        <div className={point}></div>
      </div>
      <div className={risks}>
        <p>СС риски</p>
        <div className={point}></div>
      </div>
      <div className={complications}>
        <p>Осложнения СД</p>
        <div className={point}></div>
      </div>

      <div className={down}>
        <p>Листайте вниз</p>
        <div className={arrow}></div>
      </div>
      <div className={horizont_line}></div>
    </div>
  );
};

export default TitlePage;
