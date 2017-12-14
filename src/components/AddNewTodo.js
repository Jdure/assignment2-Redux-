import React, { Component } from "react";
// import PropTypes from "prop-types";
import {connect} from 'react-redux';
import * as todoActions from "../actions";

export class AddNewTodo extends Component {
    render() {
        return (
            <div>
                <input type="text" value={this.props.addTodoValue} onChange={this.props.addTodoChanged} placeholder="Add New Todo" />
                <button className="add" onClick={this.props.saveNewTodo}>➕</button>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
  return {
    addTodoValue:state.addTodoValue
  }
}
//
const mapDispatchToProps = (dispatch) => {
    return {

      saveNewTodo: (e)=>  {
        let todo = {};
        dispatch(todoActions.saveNewTodo())
      }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(AddNewTodo)
