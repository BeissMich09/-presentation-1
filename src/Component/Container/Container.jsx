import React from "react";
import SecondPage from "./../SecondPage/SecondPage";
import TitlePage from "./../TitlePage/TitlePage";
import ThirdPageContainer from "./../ThirdPage/ThirdPageContainer";

class Container extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({ count: window.pageYOffset });
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
