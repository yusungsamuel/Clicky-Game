import React, { Component } from 'react';
import "./style.css"

class Card extends Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        if (!this.state.clicked) {
            this.setState({
                clicked: true
            })
            this.props.addPoint()
        }
    }

    render() {
        return (
            <div className="col m4 image-wrap center">
                <img onClick={this.handleClick} data-clicked={this.state.clicked} className="character center" src={this.props.image} alt={this.props.name} />
            </div>
        )
    }
}

export default Card;