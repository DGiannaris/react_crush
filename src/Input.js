import React from 'react';
import './Input.css';
import {useSpring, animated} from 'react-spring';

function Input() {
//todo oneday
// let expandHeight=(el)=>{
//
// el.target.style.height=el.target.value.length+"ch";
//
// }
const anim = useSpring({
  opacity: 1,
  from: { opacity: 0 },
});
  return (
    <animated.div  style={anim} className = "Input" >
    <input className = 'InputBox'
    type = "text"
    placeholder = "  Watcha gonna do?"/>

    </animated.div>
  );
  }

export default Input;
