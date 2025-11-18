import React, { Component } from "react";
import programming from "../../assets/images/programming.svg";

export default class FrontendImg extends Component {
  render() {
    return (
      <img 
        src={programming} 
        alt="Frontend Development"
        style={{ width: '100%', height: 'auto' }}
      />
    );
  }
}