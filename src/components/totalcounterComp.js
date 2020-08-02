import React from 'react'

export default function TotalCounter(props) {
    return (
        <div className="totalCounter">
          <h1>Total</h1>
          <h1>{ props.totalRoll }</h1>
        </div>
    )
}
