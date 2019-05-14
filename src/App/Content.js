import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Attribute from "./ContentPages/Attribute";
import Skill from "./ContentPages/Skill";
import TableOfContents from "./TableOfContents";


export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Route path = "/" exact component={TableOfContents}/>
        <Route path = "/Attributes/" component={Attribute}/>
        <Route path = "/Skills/" component={Skill}/>
        { this.props.children }
      </div>
    )
  }
}
