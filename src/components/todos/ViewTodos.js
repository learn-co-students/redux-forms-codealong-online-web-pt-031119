import React from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

const ViewTodos = props => {
    return (
        <ul className="todos-container">
            {props.todos.map(todo => <Todo key ={todo} todo={todo} />)}
        </ul>
    )
}

const mapStateToProps = state => ({todos: state.todos})
  
export default connect(mapStateToProps)(ViewTodos);