import React from 'react';
import Dice from './diceComp';

export default function DiceTray(props) {
    return (
        <div>
            { props.diceArray.map((dice) => <Dice sides={dice.sides} value={dice.value} key={dice.id} />) }
        </div>
    )
}
