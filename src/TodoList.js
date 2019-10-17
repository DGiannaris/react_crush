import React,{useEffect} from 'react';
import './TodoList.css';
import Slider from './Slider.js';
import DeleteButton from './DeleteButton.js'
function TodoList(props) {

 const itemsSave = (i,ind) => {
   localStorage.setItem('todos' +i, props.list[ind]);
   props.setval('');
 }

 const checkedSave=(itemschecked)=>{

   return localStorage.setItem('itemschecked',itemschecked);

 }


    useEffect(()=>{
      props.setlist(props.val)
    },[props.vis]);

   useEffect(() => {
      const items=props.list.map((i, ind) => {
        if (i !== '') {
          itemsSave(i,ind);}
        });
  },[props.list]);

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
          borderRadius: props.checked.some(i=>ind.toString()==i.toString()) ? '0px 10px 10px 10px':null,
        }} onClick={(event)=>{
          props.setcheck(parseInt(event.target.attributes.getNamedItem('hackedkey').value,10));
        }}>{i}</div>
          {props.checked.some(i=>ind.toString()==i.toString()) ? <DeleteButton/>  : null}
      </li>)

    }
  })

  const itemsShowtemp=props.val.split(',').map((i,ind)=>{
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
