import React from 'react';
import './App.css';
import TableOfContents from "./TableOfContents"
import GT from "./img/GT.png"
import RPND from "./img/rpnd.png"
import Header from "./Header";
import Content from "./Content";
import {BrowserRouter as Router, Link} from "react-router-dom";


function App() {
    return (
        <div className="App grid-container">
            <Router>
                <div className="Home">
                    <Link to="/"><img className="App-logo" src={GT} alt="Go Home"/></Link>
                </div>
                <div className="Header">
                    <Header/>
                </div>
                <div className="TOC">
                    <TableOfContents/>
                </div>
                <div className="Content">
                    <Content/>
                </div>
                <div className="Panda">
                    <img src={RPND}/>
                </div>
                <div className="Footer"> Attribution and stuff</div>
            </Router>
        </div>
    );
}

export default App;
