import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function DiceTray(props) {

    return (
        <div className="diceTray">
            <div className="trayContainer">
            { props.diceArray.map((dice) =>
            <button className="dice" key={dice.id} onClick={ () => props.deleteDice(dice.id) }>
                <Dice sides={dice.sides} value={dice.value}/>
            </button>)}
            </div>
        </div>
    )
}

function Dice(props) {
    const animatedValue = useSpring({ config: { duration: 250 }, number: props.value, from: { number: 0 }} );
    return (
        <animated.div>
             {animatedValue.number.interpolate(number => Math.floor(number))}
        </animated.div>
    )
}