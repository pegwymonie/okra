import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Attribute from "./Attribute";
import AttributeDataService from "./data/AttributeData";

export default class Attributes extends Component {
    render() {
        let match = this.props.match;
        return (
            <div className="attribute">
                <Route exact path={match.path}>
                    {AttributeDataService.getRouteInformation().map(it =>
                        <Link to={`${match.url}/${it.path}`}> {it.heading} <br/></Link>)}
                </Route>
                <Route path={[`${match.url}/:id`,`${match.url}//:id`]} component={Attribute} />
                {this.props.children}
            </div>
        )
    }
}
