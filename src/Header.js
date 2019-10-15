import React, {useState} from 'react';
import './Header.css';
import TodoList from './TodoList.js';
import MenuButton from './MenuButton.js';
import Input from './Input.js';


function Header(){
   let initialitemid=localStorage.getItem('itemschecked').split(',');
   let initlistitems=Object.keys(localStorage).map((key)=>{
    if(key.includes('todo')){
        return localStorage[key]}
     }).filter((val)=>{return val!=null})

  //  console.log(initlistitems)
    const [value,setValue]=useState('');
    const [inputVisibility,setInputVisibility]=useState(false);
    const [itemid,setItemid]=useState([...initialitemid]);
    const [listitems,setListItems]=useState([initlistitems])
console.log(listitems)

      let handleClick=()=>{
        setInputVisibility(!inputVisibility);

      }

      let handleVal=(value)=>{
        setValue(value);
      }

      let handleitemid=(id)=>{

      if(itemid.some(item=>item===id)){
        setItemid(itemid.filter(e => e !== id))}
      else{
        setItemid([...itemid,id])}
      }


let todos=value.split(',');

   return (

      <div className = "Header" >
        <div className = "header-text" > Just Do It < /div>
          <TodoList todos={todos} list={listitems}
          vis={inputVisibility} setval={handleVal} setcheck={handleitemid}
          checked={itemid}/ >
          < MenuButton handleClick = {handleClick} / >
          {inputVisibility === true ? < Input handleval={handleVal} / > : null}
      </div>

    );


  }


export default Header;
