import React, { useState } from 'react';
import { D20icon, D12icon, D10icon, D8icon, D6icon, D4icon, reRollIcon, deleteIcon } from '../icons/icons';

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
                    <img src={ deleteIcon } alt="delete dice"/>
                </button>
                <button className="rerollButton" onClick= { () => props.reRollSingle(props.id)}>
                    <img src={ reRollIcon } alt="reroll dice"/>
                </button>
            </div>
        )
    };

    function getAnimation(n, sides) {
        let duration = Math.random() * (1 -0.25) + 0.25;
        let direction = (Math.random() >= 0.5 ? "normal" : "reverse");
        let animate = "";
        let postEffect = "";
        if (n === sides) {
            postEffect = ", maxRoll .5s ease-in-out 1s forwards";
        }
        else if (n === 1) {
            postEffect = ", minRoll .5s ease-in-out 1s forwards";
        }
        animate = {
            animation: `blur ${duration}s ease-in-out, roll ${duration}s ease-in-out ${direction}${postEffect}`
        }
        return animate;
    }

    function getIcon(sides) {
        switch (sides) {
            case 100:
                return D10icon
            case 20:
                return D20icon
            case 12:
                return D12icon
            case 10:
                return D10icon
            case 8:
                return D8icon
            case 6:
                return D6icon
            case 4:
                return D4icon
            default:
                return D6icon
        }
    }

    function getIconStyle(sides) {
        switch (sides) {
            case 100:
                return "diceIcon d10"
            case 20:
                return "diceIcon d20"
            case 12:
                return "diceIcon d12"
            case 10:
                return "diceIcon d10"
            case 8:
                return "diceIcon d8"
            case 6:
                return "diceIcon d6"
            case 4:
                return "diceIcon d4"
            default:
                return "diceIcon custom"
        }
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
            className={ props.sides === 10 || props.sides === 100 ? "dice d10fix" : "dice" }
            style={getAnimation(props.value, props.sides)}
            >
                <div className="diceText">
                    { props.value }
                </div>
                <img className={ getIconStyle(props.sides) } src={ getIcon(props.sides) } alt="diceIcon" />
            </div>
        </div>
    )
}