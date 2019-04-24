import React, { Component } from 'react';
import Nav from "./components/Nav"
import Jumbotron from "./components/Jumbotron"
import Cards from "./components/cards"
import "./style.css"

const characters = [
    {
        name: "Midoriya",
        image: "http://images.shoutwiki.com/nothingiscanon/8/80/Midoriya.jpg"
    },
    {
        name: "Todoroki",
        image: "https://cdn.myanimelist.net/images/characters/3/299595.jpg"

    },
    {
        name: "Jirou",
        image: "https://cdn.myanimelist.net/images/characters/16/300747.jpg"
    },
    {
        name: "Ochako",
        image: "https://i.pinimg.com/originals/a8/c8/90/a8c890426cbd25652c62ae3e1e07ccb6.jpg"
    },
    {
        name: "Denki",
        image: "https://cdn.myanimelist.net/images/characters/13/299425.jpg"
    },
    {
        name: "Bakugou",
        image: "https://orig00.deviantart.net/2b25/f/2016/201/f/8/fangirl_texts__bakugou_katsuki_x_fem_reader__by_jeluvs2laugh-daar4s9.jpg"
    }
];

class App extends Component {
    state = {
        score: 0,
        topScore: 0,
    }


    render() {
        return (
            <div>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Jumbotron></Jumbotron>
                <div className="container image-container">
                    {characters.map(character => {
                        return <Cards
                            name={character.name}
                            image={character.image}
                        />
                    })}
                </div>
            </div>
        )
    }
}


export default App;
