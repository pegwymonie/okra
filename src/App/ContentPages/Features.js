import {Link, Route} from "react-router-dom";
import Feature from "./Feature";
import React, {Component} from 'react';
import FeatureDataService from "./data/FeatureData";

export default class Featuress extends Component {
    render() {
        let match = this.props.match;
        return (
            <div className="features">
                <Route exact path={match.path}>
                    {FeatureDataService.getRouteInformation().map(it =>
                        <Link to={`${match.url}/${it.path}`}> {it.heading} <br/></Link>)}
                </Route>
                <Route path={[`${match.url}/:id`,`${match.url}//:id`]} component={Feature} />
                {this.props.children}
            </div>
        )
    }
}
