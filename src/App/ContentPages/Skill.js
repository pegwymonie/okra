import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return (
      <div className="skill">
        <h1>I am a Skill Page</h1>
        { this.props.children }
      </div>
    )
  }
}
