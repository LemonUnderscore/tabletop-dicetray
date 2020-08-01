import React from 'react'

export default function Dice(props) {
    return (
        <div>
            <h4>D{props.sides} rolled {props.value}</h4>
        </div>
    )
}
