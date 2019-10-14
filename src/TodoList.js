import React,{useEffect} from 'react';
import './TodoList.css';

function TodoList(props) {
 let loadedtodos;
 let trimmedtodos;


 const itemsGet = (key) => {

   loadedtodos = {...localStorage}

   trimmedtodos = Object.values(loadedtodos).map((item) =>
    {
    return  item =item.match(/\w+\s*/ig).join('').split(',')}
   )


 }


 const itemsSave = (i,ind) => {
   localStorage.setItem('todos' +i, props.todos[ind]);
   props.setval('');
 }


 useEffect(() => {
         const items=props.todos.map((i, ind) => {
           if (i !== '') {
             itemsSave(i,ind);}

         });


       return () => clearTimeout(items); //what do we say to the god of memory leaks? not today.
     },[props.vis]);


itemsGet();
const  itemsShow=trimmedtodos.map((i,ind)=>{
   if(i!==''){
    return(
      <li className="item" key={i+ind.toString()}>
        <div className="item-box" key={ind} style={{
          textDecoration: props.checked ? 'line-through' : 'none',
          backgroundColor: props.checked ? '#004D40':null,
        }} onClick={props.setcheck}
        >{i}</div>
      </li> )

    }
  })



const itemsShowtemp=props.todos.map((i,ind)=>{
   if(i!==''){
    return(
      <li className="item" key={i+ind.toString()} >
        <div className="item-box" style={{
          textDecoration: props.checked ? 'line-through' : 'none',
          backgroundColor:props.checked ? '#004D40':null,
        }} onClick={props.setcheck}>{i}</div>
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
