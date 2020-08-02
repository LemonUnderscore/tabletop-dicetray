import React from 'react'

export default function DiceMenu(props) {
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
            </div>
      </div>
    )
}
