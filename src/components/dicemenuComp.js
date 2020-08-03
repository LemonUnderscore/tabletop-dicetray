import React from 'react'

export default function DiceMenu(props) {

    const handleChange = (e) => {
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
        <div className="diceMenu">
            <div className="buttonContainer">
                <button onClick={() => props.rollDice(100)}>
                    D100
                </button>
                <button onClick={() => props.rollDice(20)}>
                    D20
                </button>
                <button onClick={() => props.rollDice(12)}>
                    D12
                </button>
                <button onClick={() => props.rollDice(10)}>
                    D10
                </button>
                <button onClick={() => props.rollDice(8)}>
                    D8
                </button>
                <button onClick={() => props.rollDice(6)}>
                    D6
                </button>
                <button onClick={() => props.rollDice(4)}>
                    D4
                </button>
                <button onClick={() => props.reRoll(props.diceArray)}>
                    Reroll
                </button>
                <button onClick={() => props.clearTray()}>
                    Clear Tray
                </button>
                <input
                type="number" 
                placeholder={""}
                onClick={(e) => e.target.select() }
                onChange={ handleChange }
                />
            </div>
      </div>
    )
}
