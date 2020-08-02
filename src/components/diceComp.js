import React from 'react'

export default function Dice(props) {
    return (
        <div>
            <h2>D{props.sides}: {props.value}</h2>
        </div>
    )
}
