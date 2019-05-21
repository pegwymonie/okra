import React, {Component} from 'react';
import Attributes from './data/AttributeData'
import {Link, Route} from "react-router-dom";
import AttributeContent from "./AttributeContent";

export default class AttributeTL extends Component {
    render() {
        let match = this.props.match
        return (
            <div className="attribute">
                <Route exact path={match.path}>
                    {Attributes.getData().map(it =>
                        <Link to={`${match.url}/${it.path}`}> {it.heading} <br/></Link>)}
                </Route>
                <Route path={[`${match.url}/:id`,`${match.url}//:id`]} component={AttributeContent} />
                {this.props.children}
            </div>
        )
    }
}
