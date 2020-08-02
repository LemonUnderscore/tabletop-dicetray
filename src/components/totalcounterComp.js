import React from 'react'

export default function TotalCounter(props) {
    return (
        <div className="totalCounter">
          <h4>Total</h4>
          <h4>{ props.totalRoll }</h4>
        </div>
    )
}
