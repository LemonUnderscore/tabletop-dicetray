import React from 'react';
import Dice from './diceComp';

export default function DiceTray(props) {
    return (
        <div className="diceTray">
            <div className="trayContainer">
            { props.diceArray.map((dice) =>
            <button className="dice" key={dice.id} onClick={ () => props.deleteDice(dice.id) }>
                <Dice sides={dice.sides} value={dice.value}/>
            </button>
            )}
            </div>
        </div>
    )
}
