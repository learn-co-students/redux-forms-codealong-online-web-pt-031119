import React from 'react'
import { connect } from 'react-redux'

const ViewTodos = props => {
    return (
        <ul className="todos-container">
            {props.todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
    )
}

const mapStateToProps = state => {
    return {todos: state.todos}
  }
  
export default connect(mapStateToProps)(ViewTodos);