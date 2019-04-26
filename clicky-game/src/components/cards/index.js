import React from 'react';
import "./style.css"



const Card = (props) => {
    
        return (
            <div className="col m4 image-wrap center ">
                <img onClick={() => props.handleClick(props.id)} data-clicked={props.clickStatus} className="character center z-depth-3 pulsed animated" src={props.image} alt={props.name} />
            </div>
        )
}

export default Card;