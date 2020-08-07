import React, { useState } from 'react';
import {ReactComponent as D20icon} from '../icons/dice-d20-solid.svg';

export default function DiceTray(props) {

    return (
        <div className="diceTray">
            <div className="trayContainer">

                { props.diceArray.map((dice) =>
                    
                    <div key={dice.id}>
                        <Dice id={dice.id} deleteDice={ props.deleteDice } reRollSingle={ props.reRollSingle } sides={dice.sides} value={dice.value}/>
                    </div>
                    
                    )}
            </div>
        </div>
    )
}

function Dice(props) {

    const [contextOpen, setOpen] = useState(false);

    function DiceContextMenu(props) {
        return (
            <div>
                <button onClick={ () => props.deleteDice(props.id) }>
                    X
                </button>
                <button onClick= { () => props.reRollSingle(props.id)}>
                    ⟳
                </button>
            </div>
        )
    };

    const isCrit = (n, sides) => {
        if (n === sides) {
            return "diceText maxRoll"
        }
        else if (n === 1) {
            return "diceText minRoll"
        }
        else return "diceText"
    }

    function getOffset() {
        return Math.random() * (0.8 -0.25) + 0.25;
    }

    const randomDuration = {
        animation: `roll ${getOffset()}s ease-in-out`
    }

    return (
        <div
        className="diceBox"
        onMouseEnter={ () => setOpen(true) } 
        onMouseLeave={ () => setOpen(false) }
        >
            <div className="diceContext">
                { contextOpen && <DiceContextMenu id={props.id} reRollSingle={ props.reRollSingle } deleteDice={ props.deleteDice } /> }
            </div>
            <div
            className="dice"
            style={randomDuration}
            >
                <div className={isCrit(props.value, props.sides)}>
                    { props.value }
                </div>
                {<D20icon className="d20icon"/>}
            </div>
        </div>
    )
}