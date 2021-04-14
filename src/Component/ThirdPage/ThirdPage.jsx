import React from "react";
import style from "./ThirdPage.module.css";
import ThirdPage1998 from "./ThirdPage1998/ThirdPage1998";
import ThirdPage2009 from "./ThirdPage2009/ThirdPage2009";
import ThirdPage2016 from "./ThirdPage2016/ThirdPage2016";

const ThirdPage = (props) => {
  let width = 1024;
  let listener = (value) => {
    return -width * value;
  };
  console.log(props.inputValue);
  return (
    <div
      onMouseLeave={() => {
        props.changeStatePage("page3", false);
      }}
      onMouseEnter={() => {
        props.changeStatePage("page3", true);
      }}
      className={style.thirdPage}
    >
      <div className={style.thirdPage_pages}>
        {+props.inputValue === 0 ? (
          <ThirdPage1998 />
        ) : +props.inputValue === 1 ? (
          <ThirdPage2009 />
        ) : (
          <ThirdPage2016 />
        )}
        {/* <ThirdPage1998 />
        <ThirdPage2009 />
        <ThirdPage2016 /> */}
      </div>
      <div className={style.range_container}>
        <input
          onChange={(e) => {
            props.getInputValue(e.target.value);
            listener(e.target.value);
          }}
          value={props.inputValue}
          type="range"
          max="2"
          min="0"
        />
      </div>
      <div className={style.years}>
        <p>1998</p>
        <p>2006</p>
        <p>2016</p>
      </div>
    </div>
  );
};

export default ThirdPage;
