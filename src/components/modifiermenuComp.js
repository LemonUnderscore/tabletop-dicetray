import React from 'react'

export default function ModifierMenu(props) {

    function handleChange(e) {
        //regex for inegers
        const regex = /^0$|^-?[1-9]\d*(\.\d+)?$/;
        if (e.target.value === "") {
            props.changeMod(0)
        }
        else if (e.target.value !== "" && regex.test(e.target.value)) {
            props.changeMod(e.target.value)
        }
    }

    return (
        <div className="modifierMenu">
            <input
                inputMode="numeric"
                placeholder={"MOD"}
                onClick={(e) => e.target.select() }
                onChange={ handleChange }
            />
            <button onClick={() => props.reRoll(props.diceArray)}>
                    Reroll
            </button>
            <button onClick={() => props.clearTray()}>
                Clear Tray
            </button>
        </div>
    )
}
