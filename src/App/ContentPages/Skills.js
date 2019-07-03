import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import Skill from "./Skill";
import SkillDataService from "./data/SkillData";

export default class Skills extends Component {
  render() {
    let match = this.props.match;
    return (
        <div className="skills">
          <Route exact path={match.path}>
            {SkillDataService.getRouteInformation().map(it =>
                <Link to={`${match.url}/${it.path}`}> {it.heading} <br/></Link>)}
          </Route>
          <Route path={[`${match.url}/:id`,`${match.url}//:id`]} component={Skill} />
          {this.props.children}
        </div>
    )
  }
}
