import React, { Component } from 'react';
import { Route } from "react-router-dom";
import TableOfContents from "./TableOfContents";
import {ContentPages} from "./ContentPages";


export default class Content extends Component {
  withDataSource(dataSource, $Comp){
    return (props) => {
      return (<$Comp {...props} dataSource={dataSource}/>)
    }
  }

  render() {
    return (
      <div className="content">
        <Route path="/" exact component={TableOfContents} />
        {ContentPages
          .map(it =>
              <Route key = {it.name} path={`/${it.name}/`} render={this.withDataSource(it.dataSource, it.component)} />)}
        {this.props.children}
      </div>
    )
  }
}
