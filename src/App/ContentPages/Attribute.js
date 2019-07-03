import React, { Component } from 'react';
import AttributeDataService from "./data/AttributeData";

export default class Attribute extends Component{
    render() {
        let match = this.props.match;
        let id = match.params.id;
        let data = AttributeDataService.getByPath(id);
        return (
            <div>
            <h3>{data.heading}</h3>
                <p>{data.content}</p>
            </div>
        )

    }
}