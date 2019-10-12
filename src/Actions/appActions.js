import {
ADDED_TODO
ADD_TODO_TOLOCALSTORAGE
TODO_CONTENT
DELETE_TODOFROMSTORAGE
} from './actionTypes';


export 
function addedTodo(item){
  return {type: ADDED_TODO ,item}
}

export function addTodoToLocalStorage(item)
{
  return {type:ADD_TODO_TOLOCALSTORAGE,item}
}

export function todoContent(value){

  return {type:TODO_CONTENT,value}
}

export function deleteTodoFromStorage(item){
  return {type:DELETE_TODOFROMSTORAGE,item}
}
