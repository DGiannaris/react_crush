import React from 'react';
import './DeleteButton.css';
import {useSpring, animated} from 'react-spring';

function DeleteButton(props){

  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });


    return (
      <animated.div  style={anim} className = "DeleteButton-wrapper" >
        <div className='DeleteButton'>
          x
        </div>
    </animated.div>
    );
  }


export default DeleteButton;
