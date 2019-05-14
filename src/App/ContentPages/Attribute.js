import React, { Component } from 'react';

export default class Attribute extends Component {
  render() {
    return (
      <div className="attribute">
        <h1>I am an Attribute Page</h1>
        { this.props.children }
      </div>
    )
  }
}
