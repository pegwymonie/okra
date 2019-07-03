import React, { Component } from 'react';
import FeatureDataService from "./data/FeatureData";


export default class Feature extends Component{
    render() {
        let match = this.props.match;
        let id = match.params.id;
        let data = FeatureDataService.getByPath(id);
        return (
            <div>
                <h3>{data.heading}</h3>
                <p>{data.content}</p>
            </div>
        )

    }
}