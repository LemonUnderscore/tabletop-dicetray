import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';

export default function DiceMenu(props) {
    const [open, setOpen] = useState(false);
    const rollDice = props.rollDice;

    return (
        <div className={open ? "diceMenuToggle open" : "diceMenuToggle"} onClick={ () => setOpen(!open) }>
            <div className={open ? "rotate" : ""} >☰</div> 
            <Transition
            items={open}
            from={{ width: "0vw", opacity: 0 }}
            enter={{ width: "55vw", opacity: 1 }}
            leave={{ width: "0vw", opacity: 0}}
            >
                {open => open && (props => <DiceDropDown open={open} style={props} rollDice={ rollDice }/> )}
            </Transition>
        </div>
    )
}

function DiceDropDown(props) {

    function MenuItem(props) {

        const handleClick = (e) => {
            e.stopPropagation();
            props.rollDice(props.sides);
        }

        return (
            <button className="menuButton" onClick={ handleClick }>
                {props.children}
            </button>
        )
    };

    function ButtonContainer(props) {
        return (
            <div className="buttonContainer">
                <MenuItem rollDice={ props.rollDice } sides={100}> D100 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={20}> D20 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={12}> D12 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={10}> D10 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={8}> D8 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={6}> D6 </MenuItem>
                <MenuItem rollDice={ props.rollDice } sides={4}> D4 </MenuItem>
            </div>
        )
    }

    return (
        <div style={props.style} className="diceMenu">
            <ButtonContainer rollDice={ props.rollDice } />
        </div>
    )
}
