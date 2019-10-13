import React from 'react';
import './Input.css';
import {useSpring, animated} from 'react-spring';

function Input(props) {
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
    onChange={event=>props.handleval(event.target.value)}
    placeholder = "  Watcha gonna do?"/>

    </animated.div>
  );
  }

export default Input;
