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
    let result;
    // листание вниз, свайп вверх
    if (touchStart - touchEnd > 50) {
      result = count >= 2 ? 2 : count + 1;
      window.scrollBy(0, result === 2 ? 1536 : 768 - window.pageYOffset);
      // листание вверх, свайп вниз
    } else if (touchStart - touchEnd < -50) {
      result = count <= 0 ? 0 : count - 1;
      window.scrollBy(
        0,
        result === 0 ? -window.pageYOffset : 768 - window.pageYOffset
      );
    } else if (result !== count) {
      setCount(result);
    }
  }
  const handleScroll = () => {
    let result;

    if (window.pageYOffset < 500) {
      result = 0;
    } else if (window.pageYOffset <= 1200) {
      result = 1;
    } else if (window.pageYOffset > 1200) {
      result = 2;
    }

    setCount(result);
  }

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
