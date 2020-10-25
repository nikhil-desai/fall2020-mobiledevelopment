import React from "react";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { isActive: true };
  }
  changeColor = () => {
    this.setState({ isActive: false });
  };
  render() {
    // Controller
    const isActive = this.state.isActive;
    // CSS
    const textStyle = {
      color: "black",
      backgroundColor: "darkgreen",
      padding: "10px 120px",
    };
    const changedText = {
      color: "white",
      backgroundColor: "orange",
      padding: "100px 10px",
    };
    const buttonStyle = {
      color: "grey",
      backgroundColor: "blue",
      padding: "10px 60px",
      borderRadius: "25px",
      fontFamily: "Arial",
    };
    // HTML
    return (
      <div>
        <h1 style={isActive ? textStyle : changedText} className="changeItem">
          Change the Header Style
        </h1>
        <button style={buttonStyle} onClick={this.changeColor}>
          Change it!
        </button>
      </div>
    );
  }
}

export default Input;
