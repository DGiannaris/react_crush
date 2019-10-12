import React from 'react';

import './Input.css';

function Input() {
//todo oneday
// let expandHeight=(el)=>{
//
// el.target.style.height=el.target.value.length+"ch";
//
// }



  return (

    <div className="Input">
    <input className='InputBox'
          type="text"
          placeholder="  Watcha gonna do?"
          // onChange={expandHeight}
        />

    </div>
  );
}

export default Input;
