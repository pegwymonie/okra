import React from 'react';

export let ContentDescription = (props) => {
    let content = props.content;
    return (
        <div>
            <h2>Descriptions</h2>
            <div className="flavor">
                <h3>Flavor</h3>
                <p>{content.flavor}</p>
            </div>
            <div className="mechanics">
                <h3>Mechanical</h3>
                <p>{content.mechanics}</p>
            </div>
        </div>
    )
};