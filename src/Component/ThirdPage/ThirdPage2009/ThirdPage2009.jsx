import React from "react";
import background from "./../../assets/page3.png";
import style from "./ThirdPage2009.module.css";
import bud from "./../../assets/bud.png";
import lipid from "./../../assets/lipid-.png";
import brain from "./../../assets/brain.png";
import capa from "./../../assets/Capa.png";
import musle from "./../../assets/musle.png";

const ThirdPage2009 = () => {
  return (
    <div className={style.thirdPage}>
      <img src={background} alt="" />
      <h3>Смертельный октет</h3>
      <div className={style.scheme}>
        <div className={style.scheme_top}>
          <div className={style.effect}>
            <p className={style.effect_text}>Инкретиновый эффект</p>

            <div className={style.img_with_arrow}>
              <div className={style.img}>
                <p className={style.num}>2</p>
              </div>
              <div className={style.effect_arrow}>
                <div className={style.arrow}></div>
              </div>
            </div>
          </div>
          <div className={style.beta}>
            <div className={style.beta_text}>
              <p className={style.num}>1</p>{" "}
              <p className={style.text}>&beta;-клетки</p>
            </div>
            <div className={style.img_with_arrow}>
              <div className={style.beta_beta}>
                <p>&beta;</p>
              </div>
              <div className={style.beta_arrow}>
                <div className={style.arrow}></div>
              </div>
            </div>
          </div>
          <div className={style.deffect_alpha}>
            <div className={style.img_with_arrow}>
              <div className={style.img}>
                <p className={style.num}>3</p>
              </div>
              <div className={style.apha_arrow}>
                <div className={style.arrow}></div>
              </div>
            </div>
            <p className={style.alpha_text}>Дефект &alpha;-клеток</p>
          </div>
        </div>
        <div className={style.scheme_center}>
          <div className={style.bud}>
            <div className={style.bud_text}>
              <p className={style.num}>8</p> <p className={style.text}>Почки</p>
            </div>
            <div className={style.img_with_arrow_bud}>
              <div className={style.bud_img}>
                <img src={bud} alt="" />
              </div>
              <div className={style.bud_arrow}>
                <div className={style.arrow}></div>
              </div>
            </div>
          </div>
          <div className={style.hyperglycemia}>Гипергликемия</div>
          <div className={style.lipid}>
            <div className={style.img_with_arrow_lipid}>
              <div className={style.lipid_arrow}>
                <div className={style.arrow}></div>
              </div>
              <div className={style.lipid_img}>
                <img src={lipid} alt="" />
              </div>
            </div>
            <div>
              <p className={style.num}>4</p>
              <p className={style.text}>Жировые клетки</p>
            </div>
          </div>
        </div>
        <div className={style.scheme_bottom}>
          <div className={style.brain}>
            <div className={style.img_with_arrow}>
              <div className={style.brain_arrow}>
                <div className={style.arrow}></div>
              </div>
              <div className={style.brain_img}>
                <img src={brain} alt="" />
              </div>
            </div>
            <div className={style.brain_text}>
              <p className={style.num}>7</p>{" "}
              <p className={style.text}>Головной мозг</p>
            </div>
          </div>
          <div className={style.capa}>
            <div className={style.img_with_arrow}>
              <div className={style.capa_arrow}>
                <div className={style.arrow}></div>
              </div>
              <div className={style.capa_img}>
                <img src={capa} alt="" />
              </div>
            </div>

            <div>
              <p className={style.num}>6</p>
              <p className={style.text}>Печень</p>
            </div>
          </div>
          <div className={style.musle}>
            <div className={style.img_with_arrow}>
              <div className={style.musle_arrow}>
                <div className={style.arrow}></div>
              </div>
              <div className={style.musle_img}>
                <img src={musle} alt="" />
              </div>
            </div>
            <div>
              <p className={style.num}>5</p>
              <p className={style.text}>Мышцы</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage2009;
