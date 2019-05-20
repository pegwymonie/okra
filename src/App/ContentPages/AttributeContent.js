import React, { Component } from 'react';

export default class AttributeContent extends Component{
    render() {
        let match = this.props.match;
        return (
            <h3>{match.params.id}</h3>
        )

    }
}