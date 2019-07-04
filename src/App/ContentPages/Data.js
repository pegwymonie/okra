import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";

export default class Data extends Component {

    withDataFrom(dataSource){
        return props => {
            let data = dataSource.getByPath(props.match.params.id);
            let $comp = data.layout;
            let content = data.content;
            return (< $comp {...props} content={content}/>)
        }
    }

  render() {
    let match = this.props.match;
    let dataSource = this.props.dataSource;
    return (
        <div className="content">
          <Route exact path={match.path}>
            {dataSource.getRouteInformation().map(it =>
                <Link to={`${match.url}/${it.path}`}> {it.title} <br/></Link>)}
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
