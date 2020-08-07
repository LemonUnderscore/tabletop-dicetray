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
                <button className="deleteButton" onClick={ () => props.deleteDice(props.id) }>
                    X
                </button>
                <button className="rerollButton" onClick= { () => props.reRollSingle(props.id)}>
                    ⟳
                </button>
            </div>
        )
    };

    function isMinMax(n, sides) {
        if (n === sides) {
            return "diceBox maxRoll"
        }
        else if (n === 1) {
            return "diceBox minRoll"
        }
        else return "diceBox"
    }

    function getAnimation() {
        let duration = Math.random() * (1 -0.25) + 0.25;
        let direction = (Math.random() >= 0.5 ? "normal" : "reverse");
        let animate = {
            animation: `blur ${duration}s ease-in-out, roll ${duration}s ease-in-out ${direction}`
        }
        return animate;
    }

    return (
        <div
        className={isMinMax(props.value, props.sides)}
        onMouseEnter={ () => setOpen(true) } 
        onMouseLeave={ () => setOpen(false) }
        >
            <div className="diceContext">
                { contextOpen && <DiceContextMenu id={props.id} reRollSingle={ props.reRollSingle } deleteDice={ props.deleteDice } /> }
            </div>
            <div
            className="dice"
            style={getAnimation()}
            >
                <div className="diceText">
                    { props.value }
                </div>
                {<D20icon className="d20icon"/>}
            </div>
        </div>
    )
}