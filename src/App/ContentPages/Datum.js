import React, { Component } from 'react';

export default class Datum extends Component{
    render() {
        let data = this.props.data;
        return (
            <div>
                <h3>{data.heading}</h3>
                <p>{data.content}</p>
            </div>
        )

    }
}