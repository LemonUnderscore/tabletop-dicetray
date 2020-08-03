import React from 'react';
import './App.scss';

import DiceMenu from './components/dicemenuComp';
import DiceTray from './components/dicetrayComp';
import TotalCounter from './components/totalcounterComp';

class App extends React.Component {

  state = {
    diceArray: [],
    idCounter: 0,
    totalRoll: 0,
    modifier: 0,
  };

  render() { 
    return (
    <div className="mainScreen">
      <DiceTray
        diceArray={ this.state.diceArray }
        deleteDice={ this.deleteDice.bind(this) }
      />
      <TotalCounter
        totalCount={ this.state.totalRoll + this.state.modifier }
        totalRoll= { this.state.totalRoll }
        modifier={ this.state.modifier }
      />
      <DiceMenu
        rollDice={ this.rollDice.bind(this) }
        reRoll={ this.reRoll.bind(this) }
        clearTray={ this.clearTray.bind(this) }
        changeMod={ this.changeMod.bind(this) }
        modifier={ this.state.modifier }
        diceArray={ this.state.diceArray }
      />
    </div>
    );
  };

  rollDice(sides) {
    let roll = Math.floor(Math.random() * sides) + 1;
    const newDice = {
      id: this.state.idCounter,
      sides: sides,
      value: roll
    };
    this.setState({
      diceArray: [...this.state.diceArray, newDice],
      idCounter: this.state.idCounter + 1
    });
    this.sumRoll(this.state.diceArray.concat(newDice));
  };

  reRoll(diceArray) {
    const rerolledArray = diceArray
    rerolledArray.forEach(dice => {
      let roll = Math.floor(Math.random() * dice.sides) + 1;
      dice.value = roll;
    });
    this.setState({
      diceArray: rerolledArray
    });
    this.sumRoll(rerolledArray);
  };

  sumRoll(diceArray) {
    let total = 0;
    diceArray.forEach(dice => {
      total += dice.value;
    });
    this.setState({
      totalRoll: total
    });
  };

  deleteDice(removeID) {
    const filteredArray = this.state.diceArray.filter(dice => dice.id !== removeID);
    this.setState({
      diceArray: filteredArray
    });
    this.sumRoll(filteredArray);
  };

  clearTray() {
    this.setState({
      diceArray: []
    });
    this.sumRoll([]);
  }

  changeMod(n) {
    const mod = parseInt(n)
    this.setState({
      modifier: mod
    })
  }

}

export default App;
