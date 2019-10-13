import React from 'react';

import './TodoList.css';

function TodoList(props) {



const items =props.todos.map((i,ind) =>{
  if(i!==''){
    return(
      <li className="item" key={i+ind.toString()}>
        <div className="item-box">{i}</div>
      </li> )
  }
});

  return (

    <div className="todoList">
      <div className="listbox">
      <ul  className="list">
            {items}
            <li className="item"><div className="item-box">Add shit...</div></li>
      </ul>
      </div>
    </div>
  );
}

export default TodoList;
