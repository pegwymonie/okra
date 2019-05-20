import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ContentPages } from "./ContentPages/index"

export default class TableOfContents extends Component {
  render() {
    return (
      <div className="tableofcontents">
        <h6>TOC Panel</h6>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            { ContentPages.map( it =>
                <li key = {it.name} >
                  <Link key = {it.name} to={`/${it.name}/`}>{it.name}</Link>
              </li>)
            }
          </ul>
        </nav>
      </div>
    )
  }
}
