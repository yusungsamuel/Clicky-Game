# Clicky-Game

![demo page](clicky-game/public/demo.png "demo")

## Description / How to Play
This game is a front-end only application that allow the user to challenge their memories. There are 12 cards with different characters on it. The goal of the game is click all 12 cards without repeating. If the user click a card that has already been clciked, the game will restart.

## Technologies Used
+ HTML
+ CSS
    + Materialize
+ Javascript
+ React.js

## Code Snippet
The score, top score, and the array that contains the information for all the character cards are stored in the state of a class component. The information and and the card components are generated  using the life-cycle method, render(). 
```
class App extends Component {
    state = {
        heroes,
        score: 0,
        topScore: 0,
        message:"click any card to start"
    }

    render() {
        return (
            <div>
                <Nav
                    score={this.state.score}
                    topScore={this.state.topScore}
                    message={this.state.message}
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
```