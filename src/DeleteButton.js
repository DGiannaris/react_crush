import React from 'react';
import './DeleteButton.css';
import {useSpring, animated} from 'react-spring';

function DeleteButton(props){

  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },delay: 100
  });


    return (
      <animated.div  style={anim} className = "DeleteButton-wrapper"
    >
        <div className='DeleteButton'  delkey={props.delkey}
          onMouseEnter={(event)=>props.sethover(parseInt(event.target.attributes.getNamedItem('delkey').value))
          }
          >
          x
        </div>
    </animated.div>
    );
  }


export default DeleteButton;
