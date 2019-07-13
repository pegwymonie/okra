import React from 'react';
import {ActionContent, SkillContent} from "../index";
import {ContentDescription} from "./ContentDescriptions";
import {ContentLinks} from "./ContentLinks";

export default ({content}) => {
    return (
        <div className="attribute">
            <h1>{content.heading}</h1>
            <ContentDescription content={content.descriptions}/>
            <ContentLinks content={content.skills()} type={SkillContent}/>
            <ContentLinks content={content.actions()} type={ActionContent}/>
        </div>
    )
}

