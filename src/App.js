import React from 'react';
import './App.scss';

import DiceMenu from './components/dicemenuComp';
import DiceTray from './components/dicetrayComp';

class App extends React.Component {

  state = {
    diceArray: [],
  }

  render() { 
    return (

    <div className="mainScreen">

      <DiceMenu rollDice={ this.rollDice.bind(this) }/>

      <DiceTray diceArray={ this.state.diceArray }/>

    </div>
    );
  }

  rollDice(sides) {
    let roll = Math.floor(Math.random() * sides) + 1;

    const newDice = {
      id: this.state.diceArray.length,
      sides: sides,
      value: roll
    };

    console.log(newDice);

    this.setState({
      diceArray: [...this.state.diceArray, newDice]
    })

  }

}

export default App;
