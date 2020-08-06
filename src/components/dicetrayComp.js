import React from 'react';
import {ReactComponent as D20icon} from '../icons/dice-d20-solid.svg';

export default function DiceTray(props) {

    function getOffset() {
        const offsets = [
            " offset-1",
            " offset-2",
            " offset-3",
            " offset-4"
        ]
        let s = "dice";
        let randomOffset = offsets[Math.floor(Math.random() * offsets.length)];
        return s.concat(randomOffset);
    }

    return (
        <div className="diceTray">
            <div className="trayContainer">
                { props.diceArray.map((dice) =>
                    <button className={getOffset()} key={dice.id} onClick={ () => props.deleteDice(dice.id) }>
                        <Dice sides={dice.sides} value={dice.value}/>
                        {<D20icon className="d20icon"/>}
                    </button>)}
            </div>
        </div>
    )
}

function Dice(props) {

    const isCrit = (n, sides) => {
        if (n === sides) {
            return "diceText maxRoll"
        }
        else if (n === 1) {
            return "diceText minRoll"
        }
        else return "diceText"
    }

    return (
        <div className={isCrit(props.value, props.sides)}>
            {props.value}
        </div>
    )
}