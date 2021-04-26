import React from "react";
import background from "./../../assets/page3.png";
import budImg from "./../../assets/bud.png";
import lipidImg from "./../../assets/lipid-.png";
import brainImg from "./../../assets/brain.png";
import capaImg from "./../../assets/Capa.png";
import musleImg from "./../../assets/musle.png";
import {
  scheme,
  scheme_top,
  effect,
  effect_text,
  img_with_arrow,
  img,
  num,
  thirdPage,
  effect_arrow,
  arrow,
  beta,
  beta_text,
  text,
  beta_beta,
  beta_arrow,
  deffect_alpha,
  apha_arrow,
  alpha_text,
  scheme_center,
  bud,
  bud_text,
  img_with_arrow_bud,
  bud_img,
  bud_arrow,
  hyperglycemia,
  lipid,
  img_with_arrow_lipid,
  lipid_arrow,
  lipid_img,
  scheme_bottom,
  brain,
  brain_arrow,
  brain_img,
  brain_text,
  capa,
  capa_arrow,
  capa_img,
  musle,
  musle_arrow,
  musle_img,
} from "./ThirdPage2009.module.css";

const ThirdPage2009 = () => {
  return (
    <div className={thirdPage}>
      <img src={background} alt="" />
      <h3>Смертельный октет</h3>
      <div className={scheme}>
        <div className={scheme_top}>
          <div className={effect}>
            <p className={effect_text}>Инкретиновый эффект</p>

            <div className={img_with_arrow}>
              <div className={img}>
                <p className={num}>2</p>
              </div>
              <div className={effect_arrow}>
                <div className={arrow}></div>
              </div>
            </div>
          </div>
          <div className={beta}>
            <div className={beta_text}>
              <p className={num}>1</p> <p className={text}>&beta;-клетки</p>
            </div>
            <div className={img_with_arrow}>
              <div className={beta_beta}>
                <p>&beta;</p>
              </div>
              <div className={beta_arrow}>
                <div className={arrow}></div>
              </div>
            </div>
          </div>
          <div className={deffect_alpha}>
            <div className={img_with_arrow}>
              <div className={img}>
                <p className={num}>3</p>
              </div>
              <div className={apha_arrow}>
                <div className={arrow}></div>
              </div>
            </div>
            <p className={alpha_text}>Дефект &alpha;-клеток</p>
          </div>
        </div>
        <div className={scheme_center}>
          <div className={bud}>
            <div className={bud_text}>
              <p className={num}>8</p> <p className={text}>Почки</p>
            </div>
            <div className={img_with_arrow_bud}>
              <div className={bud_img}>
                <img src={budImg} alt="" />
              </div>
              <div className={bud_arrow}>
                <div className={arrow}></div>
              </div>
            </div>
          </div>
          <div className={hyperglycemia}>Гипергликемия</div>
          <div className={lipid}>
            <div className={img_with_arrow_lipid}>
              <div className={lipid_arrow}>
                <div className={arrow}></div>
              </div>
              <div className={lipid_img}>
                <img src={lipidImg} alt="" />
              </div>
            </div>
            <div>
              <p className={num}>4</p>
              <p className={text}>Жировые клетки</p>
            </div>
          </div>
        </div>
        <div className={scheme_bottom}>
          <div className={brain}>
            <div className={img_with_arrow}>
              <div className={brain_arrow}>
                <div className={arrow}></div>
              </div>
              <div className={brain_img}>
                <img src={brainImg} alt="" />
              </div>
            </div>
            <div className={brain_text}>
              <p className={num}>7</p> <p className={text}>Головной мозг</p>
            </div>
          </div>
          <div className={capa}>
            <div className={img_with_arrow}>
              <div className={capa_arrow}>
                <div className={arrow}></div>
              </div>
              <div className={capa_img}>
                <img src={capaImg} alt="" />
              </div>
            </div>

            <div>
              <p className={num}>6</p>
              <p className={text}>Печень</p>
            </div>
          </div>
          <div className={musle}>
            <div className={img_with_arrow}>
              <div className={musle_arrow}>
                <div className={arrow}></div>
              </div>
              <div className={musle_img}>
                <img src={musleImg} alt="" />
              </div>
            </div>
            <div>
              <p className={num}>5</p>
              <p className={text}>Мышцы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage2009;
