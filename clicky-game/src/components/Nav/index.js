import React from "react";

function Nav(props) {
    return (
        <nav>
            <div className="nav-wrapper blue darken-4">
                <a href="/" className="brand-logo center">Clicky Game</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><h5>Score:{props.score} | </h5></li>
                    <li><h5>Top Score: {props.topScore}</h5></li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;