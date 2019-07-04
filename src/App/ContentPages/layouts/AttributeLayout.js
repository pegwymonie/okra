import React, {Component} from 'react';

export default class AttributeLayout extends Component {
    render() {
        let content = this.props.content
        return (
            <div className="attribute">
                <h1>{content.heading}</h1>
                <h4>Descriptions</h4>
                <div className="flavor">
                    <h6>Flavor</h6>
                    <p>{content.descriptions.flavor}</p>
                </div>
                <div className="mechanics">
                    <h6>Mechanical</h6>
                    <p>{content.descriptions.mechanics}</p>
                </div>
            </div>
        )
    }

}