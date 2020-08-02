import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function TotalCounter(props) {

  const value = useSpring({ config: { duration: 250 }, number: props.totalRoll, from: { number: 0 }} );

  return (
    <animated.div className="totalCounter">
      {value.number.interpolate(number => Math.floor(number))}
    </animated.div>
  );
}
