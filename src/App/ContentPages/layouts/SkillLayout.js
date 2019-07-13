import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {AttributeContent, SkillContent} from "../index";

export default class SkillLayout extends Component{

    render() {
        let content = this.props.content;
        return (
            <div className="skill">
                <h1>{content.heading}</h1>
                <h2>Descriptions</h2>
                <div className="flavor">
                    <h3>Flavor</h3>
                    <p>{content.descriptions.flavor}</p>
                </div>
                <div className="mechanics">
                    <h3>Mechanical</h3>
                    <p>{content.descriptions.mechanics}</p>
                </div>
                <div className="attributes">
                    <h3>Skills</h3>
                    <ul>
                        {content.attributes().map(it => (
                            <li>
                                <NavLink key ={it.title} to={`/${AttributeContent.name}/${it.path}`}>{it.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }

}