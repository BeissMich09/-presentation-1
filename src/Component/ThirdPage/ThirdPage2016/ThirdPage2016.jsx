import React from "react";
import intestineImg from "./../../assets/intestine.png";
import infectionImg from "./../../assets/infection.png";
import stomachImg from "./../../assets/stomach.png";
import budImg from "./../../assets/bud.png";
import brainImg from "./../../assets/brain.png";
import capaImg from "./../../assets/Capa.png";
import musleImg from "./../../assets/musle.png";
import lipidImg from "./../../assets/lipid-.png";
import background from "./../../assets/page3.png";
import {
  thirdPage,
  scheme,
  link_first_scheme,
  intestine,
  intestine_text,
  num,
  text,
  intestine_img,
  infection,
  infection_text,
  infection_img,
  amelin,
  amelin_arrows,
  amelin_arrow_l,
  arrow,
  amelin_arrow_r,
  stomach,
  stomach_text,
  img_with_arrow_stomach,
  stomach_img,
  stomach_arrow,
  arrows_colection,
  arrows_left_right_intestine,
  arrow_second,
  arrows_left_right_infection,
  link_second_scheme,
  beta,
  beta_text,
  beta_beta,
  arrows_beta,
  arrow_beta_l_l,
  arrow_beta_l,
  arrow_beta_center,
  arrow_beta_r,
  link_second_scheme_container,
  effect,
  arrow_effect,
  glucogon,
  deffect_alpha,
  effect_alpha_text,
  arrow_alpha,
  glucogon_with_arrow,
  arrow_glucogon,
  hyperglicemia_with_arrow,
  img_with_arrow_bud,
  arrows_left_right_bud,
  bud,
  bud_text,
  bud_img,
  arrows_left_right_brain_beta,
  arrows_left_right_insulin,
  link_third_scheme,
  brain,
  brain_img,
  brain_text,
  arrows_left_right_brain,
  insulin_bodies,
  insulin,
  capa,
  capa_img,
  musle,
  musle_img,
  lipid,
  lipid_img,
  lipid_text,
} from "./ThirdPage2016.module.css";

const ThirdPage2016 = () => {
  return (
    <div className={thirdPage}>
      <img src={background} alt="" />
      <h3>Звенья патогенеза СД2</h3>
      <div className={scheme}>
        <div className={link_first_scheme}>
          <div className={intestine}>
            <div className={intestine_text}>
              <p className={num}>8</p>
              <p className={text}>Микрофлора кишечника</p>
            </div>
            <div className={intestine_img}>
              <img src={intestineImg} alt="" />
            </div>
          </div>
          <div className={infection}>
            <div className={infection_text}>
              <p className={num}>9</p>
              <p className={text}>Нарушение имунной регуляции/воспаление</p>
            </div>
            <div className={infection_img}>
              <img src={infectionImg} alt="" />
            </div>
          </div>
          <div className={amelin}>
            <p>↓ амилин</p>
            <div className={amelin_arrows}>
              <div className={amelin_arrow_l}>
                <div className={arrow}></div>
              </div>
              <div className={amelin_arrow_r}>
                <div className={arrow}></div>
              </div>
            </div>
          </div>
          <div className={stomach}>
            <div className={stomach_text}>
              <p className={num}>10</p>
              <p className={text}>Желудок</p>
            </div>
            <div className={img_with_arrow_stomach}>
              <div className={stomach_img}>
                <img src={stomachImg} alt="" />
              </div>
              <div className={stomach_arrow}>
                <div className={arrow}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={arrows_colection}>
          <div className={arrows_left_right_intestine}>
            <span className={arrow}></span>
            <span className={arrow_second}></span>
          </div>
          <div className={arrows_left_right_infection}>
            <span className={arrow}></span>
            <span className={arrow_second}></span>
          </div>
        </div>
        <div className={link_second_scheme}>
          <div className={beta}>
            <div className={beta_text}>
              <p className={num}>1</p>
              <p className={text}>&beta;-клетки</p>
            </div>
            <div className={beta_beta}>
              <p>&beta;</p>
            </div>
            <div className={arrows_beta}>
              <div className={arrow_beta_l_l}>
                <div className={arrow}></div>
              </div>
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
          </div>
          <div className={link_second_scheme_container}>
            <div className={effect}>
              <p className={num}>2</p>
              <p className={text}>↓ инкретинового эффекта</p>
              <div className={arrow_effect}>
                <div className={arrow}></div>
              </div>
            </div>
            <div className={glucogon}>
              <div className={deffect_alpha}>
                <div className={effect_alpha_text}>
                  <p className={num}>3</p>
                  <p className={text}>Дефект &alpha;-клеток</p>
                </div>
                <div className={arrow_alpha}>
                  <div className={arrow}></div>
                </div>
              </div>
              <div className={glucogon_with_arrow}>
                <p>↑глюкагон</p>
                <div className={arrow_glucogon}>
                  <div className={arrow}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={hyperglicemia_with_arrow}>
            <div className={text}>Гипергликемия</div>
            <div className={img_with_arrow_bud}>
              <div className={arrows_left_right_bud}>
                <span className={arrow}></span>
                <span className={arrow_second}></span>
              </div>
            </div>
            <div className={bud}>
              <div className={bud_text}>
                <p className={num}>11</p>
                <p className={text}>Почки</p>
              </div>

              <div className={bud_img}>
                <img src={budImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={arrows_colection}>
          <div className={arrows_left_right_brain_beta}>
            <span className={arrow}></span>
            <span className={arrow_second}></span>
          </div>
          <div className={arrows_left_right_insulin}>
            <span className={arrow}></span>
            <span className={arrow_second}></span>
          </div>
        </div>
        <div className={link_third_scheme}>
          <div className={brain}>
            <div className={brain_img}>
              <img src={brainImg} alt="" />
            </div>
            <div className={brain_text}>
              <p className={num}>7</p> <p className={text}>Головной мозг</p>
              <div className={arrows_left_right_brain}>
                <span className={arrow}></span>
                <span className={arrow_second}></span>
              </div>
            </div>
          </div>
          <div className={insulin}>
            <p>Инсулинорезистентность</p>
            <div className={insulin_bodies}>
              <div className={capa}>
                <div className={capa_img}>
                  <img src={capaImg} alt="" />
                </div>
                <div>
                  <p className={num}>6</p>
                  <p className={text}>Печень</p>
                </div>
              </div>
              <div className={musle}>
                <div className={musle_img}>
                  <img src={musleImg} alt="" />
                </div>
                <div>
                  <p className={num}>5</p>
                  <p className={text}>Мышцы</p>
                </div>
              </div>
              <div className={lipid}>
                <div className={lipid_img}>
                  <img src={lipidImg} alt="" />
                </div>
                <div className={lipid_text}>
                  <p className={num}>4</p>
                  <p className={text}>Жировые клетки</p>
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
