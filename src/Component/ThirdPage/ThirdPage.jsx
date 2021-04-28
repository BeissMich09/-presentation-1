import React from "react";
import {
  thirdPage,
  thirdPage_pages,
  range_container,
  range,
  years,
} from "./ThirdPage.module.css";
import ThirdPage1998 from "./ThirdPage1998/ThirdPage1998";
import ThirdPage2009 from "./ThirdPage2009/ThirdPage2009";
import ThirdPage2016 from "./ThirdPage2016/ThirdPage2016";

const ThirdPage = ({ inputValue, getInputValue }) => {
  return (
    <div className={thirdPage}>
      <div className={thirdPage_pages}>
        {+inputValue < 33 ? (
          <ThirdPage1998 />
        ) : +inputValue < 66 ? (
          <ThirdPage2009 />
        ) : (
          <ThirdPage2016 />
        )}
      </div>
      <div className={range_container}>
        <input
          onChange={(e) => {
            getInputValue(e.target.value);
          }}
          onTouchEnd={() => {
            if (+inputValue < 33) {
              getInputValue(0);
            } else if (+inputValue < 66) {
              getInputValue(50);
            } else if (+inputValue > 67) {
              getInputValue(100);
            }
          }}
          className={range}
          value={inputValue}
          type="range"
          max="100"
          min="0"
          style={{
            background: `-webkit-linear-gradient( left, #d1eaff 0%, #d1eaff ${inputValue}%, rgba(209, 234, 255, 0.5) ${inputValue}%, rgba(209, 234, 255, 0.5) 100%)`,
          }}
        />
      </div>
      <div className={years}>
        <p>1998</p>
        <p>2006</p>
        <p>2016</p>
      </div>
    </div>
  );
};

export default ThirdPage;
