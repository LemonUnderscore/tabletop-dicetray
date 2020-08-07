import React from 'react';
import ModifierMenu from './modifiermenuComp';

export default function DiceMenu(props) {

    function MenuItem(props) {
        return (
            <button className={props.buttonName} onClick={ () => props.rollDice(props.sides) }>
                {props.children}
            </button>
        )
    };

    function ButtonContainer(props) {
        return (
            <div className="buttonContainer">
                <MenuItem buttonName="diceButton-d100" rollDice={ props.rollDice } sides={100}> D100 </MenuItem>
                <MenuItem buttonName="diceButton-d20" rollDice={ props.rollDice } sides={20}> D20 </MenuItem>
                <MenuItem buttonName="diceButton-d12" rollDice={ props.rollDice } sides={12}> D12 </MenuItem>
                <MenuItem buttonName="diceButton-d10" rollDice={ props.rollDice } sides={10}> D10 </MenuItem>
                <MenuItem buttonName="diceButton-d8" rollDice={ props.rollDice } sides={8}> D8 </MenuItem>
                <MenuItem buttonName="diceButton-d6" rollDice={ props.rollDice } sides={6}> D6 </MenuItem>
                <MenuItem buttonName="diceButton-d4" rollDice={ props.rollDice } sides={4}> D4 </MenuItem>
            </div>
        )
    }

    return (
        <div className="diceMenu">
            <ButtonContainer
            rollDice={ props.rollDice }
            />
            <ModifierMenu
            rollDice={ props.rollDice }
            changeMod={ props.changeMod }
            changeCustom={ props.changeCustom }
            modifier={ props.modifier }
            custom={ props.custom }
            clearTray={ props.clearTray }
            reRoll={ props.reRoll }
            diceArray={ props.diceArray }
            />
        </div>
    )
}