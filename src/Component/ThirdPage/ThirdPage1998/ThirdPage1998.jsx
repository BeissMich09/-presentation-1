import React from "react";
import background from "./../../assets/page3.png";
import style from "./ThirdPage1998.module.css";
import musle from "./../../assets/musle.png";
import capa from "./../../assets/Capa.png";

const ThirdPage1998 = () => {
  return (
    <div className={style.thirdPage}>
      <img src={background} alt="" />
      <h3>Звенья партеногенеза СД2</h3>
      <div className={style.scheme}>
        <div className={style.beta}>
          <div className={style.beta_text}>
            <p className={style.num}>1</p>{" "}
            <p className={style.text}>&beta;-клетки</p>
          </div>
          <div className={style.beta_beta}>
            <p>&beta;</p>
          </div>
        </div>
        <div className={style.arrows_beta}>
          <div className={style.arrow_beta_l}>
            <div className={style.arrow}></div>
          </div>
          <div className={style.arrow_beta_center}>
            <div className={style.arrow}></div>
          </div>
          <div className={style.arrow_beta_r}>
            <div className={style.arrow}></div>
          </div>
        </div>
        <div className={style.scheme_second_link}>
          <div className={style.musle}>
            <div className={style.musle_text}>
              <p className={style.num}>2</p>
              <p className={style.text}>Мышцы</p>
            </div>
            <div className={style.img_with_arrow}>
              <div className={style.musle_img}>
                <img src={musle} alt="" />
              </div>
              <div className={style.arrow_musle}>
                <div className={style.arrow}></div>
              </div>
            </div>
          </div>

          <div className={style.hyperglycemia}>Гипергликемия</div>

          <div className={style.capa}>
            <div className={style.capa_text}>
              <p className={style.num}>3</p>
              <p className={style.text}>Печень</p>
            </div>
            <div className={style.img_with_arrow}>
              <div className={style.arrow_capa}>
                <div className={style.arrow}></div>
              </div>
              <div className={style.capa_img}>
                <img src={capa} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage1998;
