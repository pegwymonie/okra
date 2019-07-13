import {NavLink} from "react-router-dom";
import React from 'react';

export const ContentLinks = ({content, type}) => (
    <div className="Links">
        <h3>{type.name}</h3>
        <ul>
            {content.map(it => (
                <li>
                    <NavLink key={it.title} to={`/${type.name}/${it.path}`}>{it.title}</NavLink>
                </li>
            ))}
        </ul>
    </div>
)