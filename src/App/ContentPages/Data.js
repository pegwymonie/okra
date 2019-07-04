import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import Datum from "./Datum";

export default class Data extends Component {

    withDataFrom(dataSource){
        return props => {
            return (<Datum {...props} data={dataSource.getByPath(props.match.params.id)}/>)
        }
    }

  render() {
    let match = this.props.match;
    let dataSource = this.props.dataSource;
    return (
        <div className="skills">
          <Route exact path={match.path}>
            {dataSource.getRouteInformation().map(it =>
                <Link to={`${match.url}/${it.path}`}> {it.heading} <br/></Link>)}
          </Route>
          <Route
              path={[`${match.url}/:id`,`${match.url}//:id`]}
              render={this.withDataFrom(dataSource)}
          />
          {this.props.children}
        </div>
    )
  }
}
