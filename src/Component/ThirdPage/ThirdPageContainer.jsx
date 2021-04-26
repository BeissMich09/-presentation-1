import React from "react";
import ThirdPage from "./ThirdPage";

class ThirdPageContainer extends React.Component {
  state = {
    inputValue: "100",
  };

  getInputValue = (value) => {
    this.setState({ inputValue: value });
  };
  render() {
    return (
      <ThirdPage
        inputValue={this.state.inputValue}
        getInputValue={this.getInputValue}
      />
    );
  }
}
export default ThirdPageContainer;
