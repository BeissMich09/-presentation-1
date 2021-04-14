import React from "react";
import SecondPage from "./../SecondPage/SecondPage";
import TitlePage from "./../TitlePage/TitlePage";
import ThirdPageContainer from "./../ThirdPage/ThirdPageContainer";

class Container extends React.Component {
  state = {
    page1: false,
    page2: false,
    page3: false,
  };

  changeStatePage = (value, page) => {
    this.setState({ [value]: page });
  };

  render() {
    return (
      <div className="App">
        <TitlePage state={this.state} changeStatePage={this.changeStatePage} />
        <SecondPage changeStatePage={this.changeStatePage} />
        <ThirdPageContainer changeStatePage={this.changeStatePage} />
      </div>
    );
  }
}

export default Container;
