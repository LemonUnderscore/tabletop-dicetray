import React from 'react';
import ModifierMenu from './modifiermenuComp';
import { ReactComponent as D20icon } from '../icons/dice-d20-solid.svg';

export default function DiceMenu(props) {

    function MenuItem(props) {

        const handleClick = (e) => {
            e.stopPropagation();
            props.rollDice(props.sides);
        }

        return (
            <button className="menuButton circleButton" onClick={ handleClick }>
                {props.children}
            </button>
        )
    };

    function ButtonContainer(props) {
        return (
            <div className="buttonContainer">
                <MenuItem rollDice={ props.rollDice } sides={100}> D100 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={20}> <D20icon/> </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={12}> D12 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={10}> D10 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={8}> D8 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={6}> D6 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={4}> D4 </MenuItem>
            </div>
        )
    }

    return (
        <div className="diceMenu">
            <ButtonContainer
            rollDice={ props.rollDice }
            />
            <ModifierMenu
            changeMod={ props.changeMod }
            modifier={ props.modifier }
            clearTray={ props.clearTray }
            reRoll={ props.reRoll }
            diceArray={ props.diceArray }
            />
            <div className="helpMenu">
                ?
            </div>
        </div>
    )
}