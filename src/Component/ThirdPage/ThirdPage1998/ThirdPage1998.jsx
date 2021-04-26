import React from "react";
import background from "./../../assets/page3.png";
import musleImg from "./../../assets/musle.png";
import capaImg from "./../../assets/Capa.png";
import {
  thirdPage,
  scheme,
  beta,
  beta_text,
  num,
  text,
  beta_beta,
  arrows_beta,
  arrow_beta_l,
  arrow,
  arrow_beta_center,
  arrow_beta_r,
  scheme_second_link,
  musle,
  musle_text,
  img_with_arrow,
  musle_img,
  arrow_musle,
  hyperglycemia,
  capa,
  capa_text,
  arrow_capa,
  capa_img,
} from "./ThirdPage1998.module.css";

const ThirdPage1998 = () => {
  return (
    <div className={thirdPage}>
      <img src={background} alt="" />
      <h3>Звенья патогенеза СД2</h3>
      <div className={scheme}>
        <div className={beta}>
          <div className={beta_text}>
            <p className={num}>1</p> <p className={text}>&beta;-клетки</p>
          </div>
          <div className={beta_beta}>
            <p>&beta;</p>
          </div>
        </div>
        <div className={arrows_beta}>
          <div className={arrow_beta_l}>
            <div className={arrow}></div>
          </div>
          <div className={arrow_beta_center}>
            <div className={arrow}></div>
          </div>
          <div className={arrow_beta_r}>
            <div className={arrow}></div>
          </div>
        </div>
        <div className={scheme_second_link}>
          <div className={musle}>
            <div className={musle_text}>
              <p className={num}>2</p>
              <p className={text}>Мышцы</p>
            </div>
            <div className={img_with_arrow}>
              <div className={musle_img}>
                <img src={musleImg} alt="" />
              </div>
              <div className={arrow_musle}>
                <div className={arrow}></div>
              </div>
            </div>
          </div>

          <div className={hyperglycemia}>Гипергликемия</div>

          <div className={capa}>
            <div className={capa_text}>
              <p className={num}>3</p>
              <p className={text}>Печень</p>
            </div>
            <div className={img_with_arrow}>
              <div className={arrow_capa}>
                <div className={arrow}></div>
              </div>
              <div className={capa_img}>
                <img src={capaImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage1998;
