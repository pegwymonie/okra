import React, { Component } from 'react';
import DataService from './data/AttributeData';

export default class AttributeContent extends Component{
    render() {
        let match = this.props.match;
        let id = match.params.id
        let data = DataService.getAttributeByPath(id)
        return (
            <div>
            <h3>{data.heading}</h3>
                <p>{data.content}</p>
            </div>
        )

    }
}