import React, {useState} from 'react';
import './Header.css';
import TodoList from './TodoList.js';
import MenuButton from './MenuButton.js';
import Input from './Input.js';


function Header(){
 let initlistitems=[];
   let initialitemid=localStorage.getItem('itemschecked').split(',');

   Object.keys(localStorage).filter((key)=>{
        if(key.includes('todo')){
          initlistitems.push(localStorage[key])
        }
   })

    const [value,setValue]=useState('');
    const [inputVisibility,setInputVisibility]=useState(false);
    const [itemid,setItemid]=useState([...initialitemid]);
    const [listitems,setListItems]=useState([...initlistitems])


      let handleClick=()=>{
        setInputVisibility(!inputVisibility);

      }

      let handleVal=(value)=>{
        console.log(value)
        setValue(value);
      }

      let handleitemid=(id)=>{
      itemid.some(item=>item===id)?setItemid(itemid.filter(e => e !== id)):setItemid([...itemid,id])
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
