import React from "react";

class Footer extends React.Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "lightblue",
      padding: "10px",
      margin: "0px 250px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={mystyle}>Made by Nikhil Desai</h1>
      </div>
    );
  }
}

export default Footer;
