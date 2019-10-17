import React from 'react';
import './DeleteButton.css';
import del from './delete-icon.png'

function DeleteButton(props){

    return (

    <div className = 'DeleteButton-wrapper' >
      <div className='DeleteButton'>
      <img src={del} alt="del-icon"></img>
      </div>
    </div>
    );
  }


export default DeleteButton;
