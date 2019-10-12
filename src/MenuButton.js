import React, { useState } from 'react';

import './MenuButton.css';
import Input from './Input.js';


function MenuButton() {

 const [value, setValue] = useState('Watcha gonna do?');
 const [inputVisibility,setInputVisibility]=useState('NOTVIS');


 let getInput=()=>{
   inputVisibility=='NOTVIS'?setInputVisibility('VIS'):setInputVisibility('NOTVIS');
   //alert(inputVisibility);
 }


  return (

    <div className="MenuButton" >
    <div className="Button"onClick={getInput}>
    <ul className="Fakelist">
    <li className="Dots"> </li>
    <li className="Dots"> </li>
    <li className="Dots"> </li>
    </ul>

    </div>
      {inputVisibility=='VIS'?<Input/>:null}
    </div>
  );
}

export default MenuButton;
