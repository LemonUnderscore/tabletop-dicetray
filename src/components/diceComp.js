import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Dice(props) {
    const animatedValue = useSpring({ config: { duration: 250 }, number: props.value, from: { number: 0 }} );

    return (
        <animated.div>
             {animatedValue.number.interpolate(number => Math.floor(number))}
        </animated.div>
    )
}
