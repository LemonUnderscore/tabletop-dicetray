import React from 'react';
import './App.scss';
import shortid from 'shortid';

import DiceMenu from './components/dicemenuComp';
import DiceTray from './components/dicetrayComp';
import TotalCounter from './components/totalcounterComp';

class App extends React.Component {

	state = {
		diceArray: [],
		totalRoll: 0,
		modifier: 0,
	};

	render() { 
		return (
		<div className="mainScreen">
			<TotalCounter
				totalCount={ this.state.totalRoll + this.state.modifier }
				totalRoll= { this.state.totalRoll }
				modifier={ this.state.modifier }
			/>
			<DiceTray
				diceArray={ this.state.diceArray }
				deleteDice={ this.deleteDice.bind(this) }
				reRollSingle={ this.reRollSingle.bind(this) }
			/>
			<DiceMenu
				changeMod={ this.changeMod.bind(this) }
				clearTray={ this.clearTray.bind(this) }
				reRoll={ this.reRoll.bind(this) }
				rollDice={ this.rollDice.bind(this) }
				diceArray={ this.state.diceArray }
				modifier={ this.state.modifier }
			/>
		</div>
		);
	};

	rollDice(sides) {
		let roll = Math.floor(Math.random() * sides) + 1;
		const newDice = {
			id: shortid.generate(),
			flipId: this.state.flipId,
			sides: sides,
			value: roll
		};
		this.setState({
			diceArray: [...this.state.diceArray, newDice],
			flipId: this.state.flipId + 1
		});
		this.sumRoll(this.state.diceArray.concat(newDice));
	};

	reRoll(diceArray) {
		const rerolledArray = diceArray
		rerolledArray.forEach(dice => {
			let roll = Math.floor(Math.random() * dice.sides) + 1;
			dice.value = roll;
			dice.id = shortid.generate();
		});
		this.setState({
			diceArray: rerolledArray,
		});
		this.sumRoll(rerolledArray);
	};

	reRollSingle(rerollID) {
		let newArray = this.state.diceArray
		newArray.forEach(dice => {
			if (dice.id === rerollID) {
				dice.value = Math.floor(Math.random() * dice.sides) + 1;
				dice.id = shortid.generate();
			}
		});
		this.setState({
			diceArray: newArray
		})
		this.sumRoll(newArray);
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
			diceArray: [],
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
