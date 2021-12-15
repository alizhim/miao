import React, { Component } from 'react'
import './theme.css';

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper">
        {/* <NavTop />
        <NavSide /> */}
        {this.props.children}
      </div>
    );
  }
}
