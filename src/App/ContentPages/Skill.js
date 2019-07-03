import React, { Component } from 'react';
import SkillDataService from "./data/SkillData";

export default class Skill extends Component{
    render() {
        let match = this.props.match;
        let id = match.params.id;
        let data = SkillDataService.getByPath(id);
        return (
            <div>
                <h3>{data.heading}</h3>
                <p>{data.content}</p>
            </div>
        )

    }
}