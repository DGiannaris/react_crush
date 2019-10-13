import React from 'react';

import './TodoList.css';

function TodoList(props) {
 //let loadedtodos=[];


  //props.todos.map((i,ind) =>{
  //   if(i!==''){
  //     // return(
  //     //   <li className="item" key={i+ind.toString()}>
  //     //     <div className="item-box">{i}</div>
  //     //   </li> )
  //
  //   }});


 // const itemsSave =(key)=>{
 //   let str = JSON.stringify(props.todos);
 //   localStorage.setItem('todos'+key,str);
 // }
 //
 //
 // const itemsGet=(key)=>{
 //   let str =localStorage.getItem('todos'+key);
 //   loadedtodos=JSON.parse(str);
 // }
 //
 // const items=props.todos.map((i,ind) =>{
 //
 //   if(i!==''){
 //     itemsSave(i);
 //     itemsGet(i);
 //   }
 // });
 //
 // console.log(localStorage);


const itemsShow= props.todos.map((i,ind)=>{ if(i!==''){
    return(
      <li className="item" key={i+ind.toString()}>
        <div className="item-box">{i}</div>
      </li> )

  }
})


//const items=localStorage.map(i=>console.log(i))

  return (

    <div className="todoList">
      <div className="listbox">
      <ul  className="list">
   {itemsShow}
            <li className="item"><div className="item-box">Add shit...</div></li>
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
