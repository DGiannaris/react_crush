import React,{useEffect} from 'react';
import './TodoList.css';

function TodoList(props) {
 let loadedtodos;
 let trimmedtodos;


 const itemsGet=(key)=>{

   loadedtodos={...localStorage}

   trimmedtodos=Object.values(loadedtodos).map((item)=>
      item=item.match(/\w/ig).join('').split(',')
   )

 }


 const itemsSave =(key,ind)=>{
   localStorage.setItem('todos'+key,props.todos[ind]);
 }

 useEffect(() => {
     const items = setTimeout(() => {
       props.todos.map((i,ind) =>{

       if(i!==''){
         itemsSave(i,ind);

       }
     });
   }, 800);

     return () => clearTimeout(items);//what do we say to the god of memory leaks? not today.
   }, [props.todos]);


itemsGet();
const itemsShow= trimmedtodos.map((i,ind)=>{
   if(i!==''){
    return(
      <li className="item" key={i+ind.toString()}>
        <div className="item-box">{i}</div>
      </li> )

  }
})


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
