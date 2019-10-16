import React,{useEffect} from 'react';
import './TodoList.css';
import Slider from './Slider.js';

function TodoList(props) {
 let loadedtodos;
 let trimmedtodos;



 const itemsSave = (i,ind) => {
   localStorage.setItem('todos' +i, props.todos[ind]);
   props.setval('');
 }

 const checkedSave=(itemschecked)=>{

   return localStorage.setItem('itemschecked',itemschecked);

 }


 useEffect(() => {
         const items=props.todos.map((i, ind) => {
           if (i !== '') {
             itemsSave(i,ind);}

         });

     },[props.vis]);

useEffect(() => {
       checkedSave(props.checked);
         },[props.checked]);


const  itemsShow=props.list.map((i,ind)=>{
   if(i!==''){
    return(
   <li className="item" key={i+ind.toString()}>
        <div className="item-box" hackedkey={ind} style={{
          textDecoration: props.checked.some(i=>ind.toString()==i.toString()) ? 'line-through' : 'none',
          backgroundColor: props.checked.some(i=>ind.toString()==i.toString()) ? '#004D40':null,
        }} onClick={(event)=>{
          props.setcheck(parseInt(event.target.attributes.getNamedItem('hackedkey').value,10));
        }}>{i}</div>
      </li>)

    }
  })



const itemsShowtemp=props.todos.map((i,ind)=>{
   if(i!==''){
    return(
      <li className="item" key={i+ind.toString()} >
        <div className="item-box" >{i}</div>
      </li> )

  }
})


  return (

    <div className="todoList">
      <div className="listbox">
      <ul  className="list">
            {itemsShow}
            {itemsShowtemp}
            <li className="item"><div className="item-box">Add shit...</div></li>
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
