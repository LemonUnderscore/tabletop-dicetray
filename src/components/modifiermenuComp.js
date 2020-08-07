import React from 'react'

export default function ModifierMenu(props) {

    function handleModChange(e) {
        //regex for integers
        const regex = /^0$|^-?[1-9]\d*(\.\d+)?$/;
        if (e.target.value === "") {
            props.changeMod(0)
        }
        else if (e.target.value !== "" && regex.test(e.target.value)) {
            props.changeMod(e.target.value)
        }
    }

    function handleCustomChange(e) {
        const regex = /^0$|^-?[1-9]\d*(\.\d+)?$/;
        if (e.target.value === "") {
            props.changeCustom(2)
        }
        else if (e.target.value !== "" && regex.test(e.target.value)) {
            props.changeCustom(e.target.value)
        }
    }

    return (
        <div className="modifierMenu">
            <div className="customDice">
                <input
                inputMode="numeric"
                placeholder={"Custom Dice"}
                onClick={ (e) => e.target.select() }
                onChange={ handleCustomChange }
                />
                <button className="customButton" onClick={ () => props.rollDice(props.custom) } >D{props.custom}</button>
            </div>
            <input
                inputMode="numeric"
                placeholder={"Modifier"}
                onClick={(e) => e.target.select() }
                onChange={ handleModChange }
            />
            <button className="modMenuButton" onClick={() => props.reRoll(props.diceArray)}>
            Reroll All
            </button>
            <button  className="modMenuButton" onClick={() => props.clearTray()}>
            Clear Tray
            </button>
        </div>
    )
}
