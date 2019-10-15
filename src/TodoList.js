import React,{useEffect} from 'react';
import './TodoList.css';

function TodoList(props) {
 let loadedtodos;
 let trimmedtodos;
 let loadedchecked;
let trimmedchecked;


 const itemsGet = () => {

   loadedtodos = {...localStorage}

   trimmedtodos = Object.values(loadedtodos).filter((item) =>
    {
      if(Object.keys(loadedtodos).find(key => loadedtodos[key] === item).match(/^(todos)/)){
        return  item = item.match(/\w+\s*/ig).toString().split(',')
      }

  })

 }

 const checkedGet=()=>{
    loadedchecked={...localStorage};
   trimmedchecked=Object.values(loadedchecked).filter((item)=>{
     return Object.keys(loadedchecked).find(key => loadedchecked[key] === item).match(/^(itemschecked)/)
   })
   console.log(localStorage)
   console.log(trimmedchecked)
 }


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



itemsGet();
checkedGet();
//console.log(trimmedchecked);

const  itemsShow=trimmedtodos.map((i,ind)=>{
   if(i!==''){
    return(
      <li className="item" key={i+ind.toString()}>
        <div className="item-box" hackedkey={ind} style={{
          textDecoration: trimmedchecked.some(i=>ind.toString()==i.toString()) ? 'line-through' : 'none',
          backgroundColor: trimmedchecked.some(i=>ind.toString()==i.toString()) ? '#004D40':null,
        }} onClick={(event)=>{
          props.setcheck(event.target.attributes.getNamedItem('hackedkey').value);
          checkedSave(props.checked);
        }}>{i}</div>
      </li> )

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
