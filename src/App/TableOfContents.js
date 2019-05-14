import React, { Component } from 'react';
import { Link } from "react-router-dom";


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
            <li>
              <Link to="/Attributes/">Attributes</Link>
            </li>
            <li>
              <Link to="/Skills/">Skills</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
