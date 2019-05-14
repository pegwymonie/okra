import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Potato's Old Kingdom System Reference Document</h1>
        { this.props.children }
      </div>
    )
  }
}
