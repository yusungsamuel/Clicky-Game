import React from "react";
import "./style.css";

function Jumbotron(props) {
    return (
        <div className="banner">
            <div className="center text-box">
            <h1 className="text">Clicky Game!</h1>
            <p className="text">Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        </div>
    )
};

export default Jumbotron;