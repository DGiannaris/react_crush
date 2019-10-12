import React, {useState} from 'react';
import { PropTypes } from 'react';
import './Header.css';
import TodoList from './TodoList.js';
import MenuButton from './MenuButton.js';
import Input from './Input.js';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      value:'',
      inputVisibility:false
    }

    this.handleVal = this.handleVal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



handleVal(val){
  this.setState({value:val});
}


  handleClick(){
    this.setState({inputVisibility:!this.state.inputVisibility});

}
  render() {

   return (

      <div className = "Header" >
      <div className = "header-text" > Just Do It < /div>
      <TodoList / >
      < MenuButton handleClick = {this.handleClick} / >
      {this.state.inputVisibility === true ? < Input / > : null}
      </div>

    );


  }
}

export default Header;
