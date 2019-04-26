import React from "react";

function Nav(props) {
    return (
        <div className="navbar-fixed">
            <nav>
                <div className="nav-wrapper blue darken-4">
                    <a href="/" className="brand-logo left text">Clicky Game</a>
                    <h5 className="brand-logo center text">{props.message}</h5>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><h5 className="text">Score:{props.score} | </h5></li>
                        <li><h5 className="text">Top Score: {props.topScore}</h5></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default Nav;