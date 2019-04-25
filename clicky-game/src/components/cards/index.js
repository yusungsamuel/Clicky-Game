import React from "react"
import "./style.css"

function Card(props){
    return (
        <div onClick={props.addPoint} className="col m4 image-wrap center">
            <img className="character center" src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card;