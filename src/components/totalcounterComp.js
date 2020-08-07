import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function TotalCounter(props) {

  const animatedRoll = useSpring({ config: { duration: 400 }, number: props.totalRoll, from: { number: 0 }} );
  const animatedMod = useSpring({ config: { duration: 250 }, number: props.modifier, from: { number: 0 }} );
  const animatedTotal = useSpring({ config: { duration: 500 }, number: props.totalCount, from: { number: 0 }} );

  return (
    <div className="totalMenu">
      <div className="totalResult">
        <animated.div>
          {animatedTotal.number.interpolate(number => Math.floor(number))}
        </animated.div>
      </div>
      <div className="totalSum">
        <animated.div>
          {animatedRoll.number.interpolate(number => Math.floor(number))}
        </animated.div>
        <div>+</div>
        <animated.div>
          {animatedMod.number.interpolate(number => Math.floor(number))}
        </animated.div>
      </div>
    </div>
  );
}
