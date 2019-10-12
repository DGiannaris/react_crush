import React from 'react';
import { PropTypes } from 'react';

import './MenuButton.css';


class MenuButton extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

    <div className = "MenuButton" >
      <div className = "Button"  onClick = {this.props.handleClick} >
        <ul className = "Fakelist" >
          <li className = "Dots" > < /li>
          <li className = "Dots" > < /li>
          <li className = "Dots" > < /li>
        </ul>

      </div>

      </div>
    );
  }
}

export default MenuButton;
