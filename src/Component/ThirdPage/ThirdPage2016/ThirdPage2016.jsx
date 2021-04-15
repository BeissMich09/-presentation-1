import React from "react";
import style from "./ThirdPage2016.module.css";
import intestine from "./../../assets/intestine.png";
import infection from "./../../assets/infection.png";
import stomach from "./../../assets/stomach.png";
import bud from "./../../assets/bud.png";
import brain from "./../../assets/brain.png";
import capa from "./../../assets/Capa.png";
import musle from "./../../assets/musle.png";
import lipid from "./../../assets/lipid-.png";
import background from "./../../assets/page3.png";

const ThirdPage2016 = () => {
  return (
    <div className={style.thirdPage}>
      <img src={background} alt="" />
      <h3>Звенья партеногенеза СД2</h3>
      <div className={style.scheme}>
        <div className={style.link_first_scheme}>
          <div className={style.intestine}>
            <div className={style.intestine_text}>
              <p className={style.num}>8</p>
              <p className={style.text}>Микрофлора кишечника</p>
            </div>
            <div className={style.intestine_img}>
              <img src={intestine} alt="" />
            </div>
          </div>
          <div className={style.infection}>
            <div className={style.infection_text}>
              <p className={style.num}>9</p>
              <p className={style.text}>
                Нарушение имунной регуляции/воспаление
              </p>
            </div>
            <div className={style.infection_img}>
              <img src={infection} alt="" />
            </div>
          </div>
          <div className={style.amelin}>
            <p>↓ амилин</p>
            <div className={style.amelin_arrows}>
              <div className={style.amelin_arrow_l}>
                <div className={style.arrow}></div>
              </div>
              <div className={style.amelin_arrow_r}>
                <div className={style.arrow}></div>
              </div>
            </div>
          </div>
          <div className={style.stomach}>
            <div className={style.stomach_text}>
              <p className={style.num}>10</p>
              <p className={style.text}>Желудок</p>
            </div>
            <div className={style.img_with_arrow_stomach}>
              <div className={style.stomach_img}>
                <img src={stomach} alt="" />
              </div>
              <div className={style.stomach_arrow}>
                <div className={style.arrow}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={style.arrows_colection}>
          <div className={style.arrows_left_right_intestine}>
            <span className={style.arrow}></span>
            <span className={style.arrow_second}></span>
          </div>
          <div className={style.arrows_left_right_infection}>
            <span className={style.arrow}></span>
            <span className={style.arrow_second}></span>
          </div>
        </div>
        <div className={style.link_second_scheme}>
          <div className={style.beta}>
            <div className={style.beta_text}>
              <p className={style.num}>1</p>
              <p className={style.text}>&beta;-клетки</p>
            </div>
            <div className={style.beta_beta}>
              <p>&beta;</p>
            </div>
            <div className={style.arrows_beta}>
              <div className={style.arrow_beta_l_l}>
                <div className={style.arrow}></div>
              </div>
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
          </div>
          <div className={style.link_second_scheme_container}>
            <div className={style.effect}>
              <p className={style.num}>2</p>
              <p className={style.text}>↓ инкретинового эффекта</p>
              <div className={style.arrow_effect}>
                <div className={style.arrow}></div>
              </div>
            </div>
            <div className={style.glucogon}>
              <div className={style.deffect_alpha}>
                <div className={style.effect_alpha_text}>
                  <p className={style.num}>3</p>
                  <p className={style.text}>Дефект &alpha;-клеток</p>
                </div>
                <div className={style.arrow_alpha}>
                  <div className={style.arrow}></div>
                </div>
              </div>
              <div className={style.glucogon_with_arrow}>
                <p>↑глюкагон</p>
                <div className={style.arrow_glucogon}>
                  <div className={style.arrow}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.hyperglicemia_with_arrow}>
            <div className={style.text}>Гипергликемия</div>
            <div className={style.img_with_arrow_bud}>
              <div className={style.arrows_left_right_bud}>
                <span className={style.arrow}></span>
                <span className={style.arrow_second}></span>
              </div>
            </div>
            <div className={style.bud}>
              <div className={style.bud_text}>
                <p className={style.num}>11</p>
                <p className={style.text}>Почки</p>
              </div>

              <div className={style.bud_img}>
                <img src={bud} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={style.arrows_colection}>
          <div className={style.arrows_left_right_brain_beta}>
            <span className={style.arrow}></span>
            <span className={style.arrow_second}></span>
          </div>
          <div className={style.arrows_left_right_insulin}>
            <span className={style.arrow}></span>
            <span className={style.arrow_second}></span>
          </div>
        </div>
        <div className={style.link_third_scheme}>
          <div className={style.brain}>
            <div className={style.brain_img}>
              <img src={brain} alt="" />
            </div>
            <div className={style.brain_text}>
              <p className={style.num}>7</p>{" "}
              <p className={style.text}>Головной мозг</p>
              <div className={style.arrows_left_right_brain}>
                <span className={style.arrow}></span>
                <span className={style.arrow_second}></span>
              </div>
            </div>
          </div>
          <div className={style.insulin}>
            <p>Инсулинорезистентность</p>
            <div className={style.insulin_bodies}>
              <div className={style.capa}>
                <div className={style.capa_img}>
                  <img src={capa} alt="" />
                </div>
                <div>
                  <p className={style.num}>6</p>
                  <p className={style.text}>Печень</p>
                </div>
              </div>
              <div className={style.musle}>
                <div className={style.musle_img}>
                  <img src={musle} alt="" />
                </div>
                <div>
                  <p className={style.num}>5</p>
                  <p className={style.text}>Мышцы</p>
                </div>
              </div>
              <div className={style.lipid}>
                <div className={style.lipid_img}>
                  <img src={lipid} alt="" />
                </div>
                <div className={style.lipid_text}>
                  <p className={style.num}>4</p>
                  <p className={style.text}>Жировые клетки</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThirdPage2016;
