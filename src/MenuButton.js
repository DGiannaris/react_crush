import React from 'react';
import './MenuButton.css';

function MenuButton(props){

    return (

    <div className = "MenuButton" >
      <div className = "Button"  onClick = {props.handleClick} >
        <ul className = "Fakelist" >
          <li className = "Dots" > < /li>
          <li className = "Dots" > < /li>
          <li className = "Dots" > < /li>
        </ul>

      </div>

      </div>
    );
  }


export default MenuButton;
