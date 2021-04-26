import React, { useEffect, useState } from "react";
import SecondPage from "./../SecondPage/SecondPage";
import TitlePage from "./../TitlePage/TitlePage";
import ThirdPageContainer from "./../ThirdPage/ThirdPageContainer";

const Container = () => {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [touchStart, setTouchStart] = useState(0);
  const [count, setCount] = useState(0);

  let touchEnd = 0;
  const setTouchEnd = (value) => {
    touchEnd = value;
  };

  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientY);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientY);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 500) {
      setCount(count >= 2 ? 2 : count + 1);
    } else if (touchStart - touchEnd < -500) {
      setCount(count <= 0 ? 0 : count - 1);
    }
  }
  const handleScroll = () => {
    if (window.pageYOffset < 500 ) {
      setCount(0);
    } else if (window.pageYOffset < 1200) {
      setCount(1);
    } else if (window.pageYOffset > 1200) {
      setCount(2);
    }
  };
  return (
    <div
      onTouchMove={(e) => {
        handleTouchMove(e);
      }}
      onTouchStart={(e) => {
        handleTouchStart(e);
      }}
      onTouchEnd={() => {
        handleTouchEnd();
      }}
      className="App"
    >
      <TitlePage count={count} />
      <SecondPage />
      <ThirdPageContainer />
    </div>
  );
};

export default Container;
