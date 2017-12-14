import React, {Component} from "react";
// import PropTypes from "prop-types";
import Header from "./Header";
import Todolist from "./Todolist";
import AddNewTodo from "./AddNewTodo";
import {connect} from 'react-redux';
import * as todoActions from "../actions";

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <Todolist />
                <AddNewTodo addTodoChanged={this.props.addTodoChanged} addTodoValue={this.props.addTodoValue} saveNewTodo={this.props.saveNewTodo} />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
    addTodoValue:state.addTodoValue,
    todoList:state.todoList
  }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        addTodoChanged: (e)=>  dispatch(todoActions.todoChanged(e.target.value))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Main);
