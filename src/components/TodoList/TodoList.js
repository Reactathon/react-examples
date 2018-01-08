import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Typography from 'material-ui/Typography'

import {getVisibleTodos} from "../../reducers/todoReducer"
import {toggleTodo} from "../../actions/todoActions"

import Todos from './Todos'
import Filters from './Filters'
import AddTodo from './AddTodo'


import './TodoList.css'

// Extract the passed in props using Object Destructuring
const TodoList = ({todos, onClick}) => {

    console.log(`Within TodoList and todos are `, todos)

    return (
        <div className='container'>
            <Typography type="display2" className='header'> Todo List </Typography>
            <AddTodo/>
            <Todos todos={todos} onClick={onClick}/>
            <Filters/>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: id => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)