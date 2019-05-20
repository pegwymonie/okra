import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { ContentPages } from "./ContentPages/index"
import TableOfContents from "./TableOfContents";


export default class Content extends Component {
  render() {
    return (
      <div className="content">
        <Route path="/" exact component={TableOfContents} />
        {ContentPages
          .map(it =>
              <Route key = {it.name} path={`/${it.name}/`} component={it.component} />)}
        {this.props.children}
      </div>
    )
  }
}
