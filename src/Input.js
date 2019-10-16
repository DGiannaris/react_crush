import React from 'react';
import './Input.css';
import {useSpring, animated} from 'react-spring';

function Input(props) {

const anim = useSpring({
  opacity: 1,
  from: { opacity: 0 },
});




  return (
    <animated.div  style={anim} className = "Input" >
    <input className = 'InputBox'
    type = "text"
    onChange={event=>props.handleval(event.target.value)}
    placeholder = " Add it!"/>

    </animated.div>
  );
  }

export default Input;
