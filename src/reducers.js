import {SAVE_NEWTODO,TODO_CHANGED,TOGGLE_STATUS} from "./actions";

export default function todoApp(state=[],action){

  let newState = Object.assign({},state);
  switch(action.type){
    case SAVE_NEWTODO:{

      if(newState.addTodoValue==""){
        return state;
      }

      let newTodoItem = {};

      const lastId = newState.todoList[newState.todoList.length-1].id;
      newTodoItem.id = lastId+1;
      newTodoItem.key = lastId+1;
      newTodoItem.text = newState.addTodoValue;
      newTodoItem.status = 0;

      let newArray = [...newState.todoList, newTodoItem]
      newState.todoList=newArray;
      newState.addTodoValue="";
    }

    break;
    case TODO_CHANGED:
      newState.addTodoValue = action.text;

    break;

    case TOGGLE_STATUS:

     {
     let renewArray = newState.todoList.map((todo) => {
       if (todo.id == action.id) {
          return Object.assign({}, todo, {status: todo.status ? 0: 1});
        } else {
          return Object.assign({}, todo);
        }
     });
     newState.todoList=renewArray;
   }

    break;

    default:
    return state;
  }
  return newState;
}
