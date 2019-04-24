import React from "react";
import Score from "../Score"

function Nav() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Clicky Game</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Score/></li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;