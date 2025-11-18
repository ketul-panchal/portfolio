import React, { Component } from "react";
import mobileApp from "../../assests/images/mobile-application.svg";

export default class MobileImg extends Component {
  render() {
    return (
      <img 
        src={mobileApp} 
        alt="Mobile Development"
        style={{ width: '100%', height: 'auto' }}
      />
    );
  }
}