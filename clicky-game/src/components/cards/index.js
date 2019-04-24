import React from "react"
import "./style.css"

function Card(props){
    return (
        <div class="col m4 image-wrap center">
            <img className="character" src={props.image} alt={props.name}/>
        </div>
    )
}

export default Card;