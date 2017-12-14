
export const TODO_CHANGED = "TODO_CHANGED"
export const SAVE_NEWTODO = "SAVE_NEWTODO"
export const TOGGLE_STATUS = "TOGGLE_STATUS"

export const todoChanged = (text) =>{
  return{type:TODO_CHANGED,text}
}
export const saveNewTodo = () =>{
  return {type:SAVE_NEWTODO}
}
export const toogleStatus = (id) =>{
  return {type:TOGGLE_STATUS,id}
}
