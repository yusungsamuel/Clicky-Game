import React, { Component } from 'react';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Cards from "./components/cards";
import "./style.css";
import heroes from "./heroes.json";

class App extends Component {
    state = {
        heroes,
        score: 0,
        topScore: 0
    }


    handleClick = (id) => {
        let score = this.state.score
        let topScore = this.state.topScore
        let hero = this.state.heroes.filter( hero => hero.id === id)[0]

        this.shuffle(heroes)

        //if unclicked image is clicked
        if(!hero.clicked){
            hero.clicked = true;
            console.log(hero);
            score += 1;
            if(score > topScore){
                topScore = score
            }
            this.setState({score, topScore, heroes})
            console.log(heroes)

        }

        //when duplicate is clicked
        else{
            this.state.heroes.map(hero => 
                 hero.clicked = false
            )
            score = 0
            this.setState({
                score,
                heroes
            })
            console.log(heroes)

        }


    }

    shuffle = (array) => {
        let j, temp, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
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
                    {heroes.map(hero => {
                        return <Cards
                            id = {hero.id}
                            key={hero.name}
                            image={hero.image}
                            clickStatus={hero.clicked}
                            handleClick= {this.handleClick}
                        />
                    })}
                </div>
            </div>
        )
    }
}


export default App;
